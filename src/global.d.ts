declare module "*.module.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.mp4";
declare module "*.webm";
declare module "*.mp3";
declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module "*.ttf";
declare module "*.woff";
declare module "*.woff2";

declare const __PLATFORM__: "mobile" | "desktop";
declare const __ENV__: "production" | "development";
