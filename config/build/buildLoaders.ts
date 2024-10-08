import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/types";
import ReactRefreshTypeScript from "react-refresh-typescript";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const svgrLoader = {
    test: /\.svg$/i,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
          svgConfig: {
            plugins: [
              {
                name: "convertColors",
                params: {
                  currentColor: true,
                },
              },
            ],
          },
        },
      },
    ],
  };

  const cssLoader = {
    test: /\.css$/i,
    use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"],
  };

  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
      },
    },
  };

  const postcssLoader = {
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        plugins: [
          [
            "autoprefixer",
            {
              // Options
            },
          ],
        ],
      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      postcssLoader,
      "sass-loader",
    ],
  };

  const fileLoader = {
    test: /\.(mp4|webm|ogg|ttf|woff|woff2|mp3|)$/,
    use: {
      loader: "file-loader",
      options: {
        name: "[path][name].[ext]",
      },
    },
  };

  const tsLoader = {
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: [
      {
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
        },
      },
    ],
  };

  return [assetLoader, scssLoader, tsLoader, svgrLoader, cssLoader, fileLoader];
}
