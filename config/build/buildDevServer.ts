import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";
export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port || 3000,
    open: true,
    // на nginx проксировать на index.html
    historyApiFallback: true,
    // вебсокет соединение позволяет редактировать код без перезагрузки страницы
    hot: true,
  };
}
