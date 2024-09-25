import React from "react";
import { GlobalStyles } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import ManropeRegularWoff from "@/assets/fonts/Manrope-Regular.woff";
import ManropeRegularWoff2 from "@/assets/fonts/Manrope-Regular.woff2";
import ManropeMediumWoff from "@/assets/fonts/Manrope-Medium.woff";
import ManropeMediumWoff2 from "@/assets/fonts/Manrope-Medium.woff2";
import ManropeBoldWoff from "@/assets/fonts/Manrope-Bold.woff";
import ManropeBoldWoff2 from "@/assets/fonts/Manrope-Bold.woff2";

export const Global = () => (
  <>
    <CssBaseline />
    <GlobalStyles
      styles={{
        "@font-face": {
          fontFamily: "Manrope",
          src: `
                      url(${ManropeRegularWoff2}) format('woff2'),
                      url(${ManropeRegularWoff}) format('woff'),
                      url(${ManropeMediumWoff2}) format('woff2'),
                      url(${ManropeMediumWoff}) format('woff'),
                      url(${ManropeBoldWoff2}) format('woff2'),
                      url(${ManropeBoldWoff}) format('woff')
                    `,
          fontWeight: "400" + " 500 600",
          fontStyle: "normal",
        },

        "*": {
          boxSizing: "border-box",
        },
        "*::before, *::after": {
          boxSizing: "inherit",
        },
        body: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          fontFamily: "'Manrope', sans-serif",
          overflowX: "hidden",
          background: "#fff",
          color: "#000",
          scrollBehavior: "smooth",
        },
        "h1, h2, h3, h4, p": {
          margin: 0,
          padding: 0,
        },
        "ul, li": {
          listStyle: "none",
          margin: 0,
          padding: 0,
        },
        a: {
          textDecoration: "none",
        },
        "img, picture": {
          maxWidth: "100%",
          display: "block",
        },
        "input, button, textarea, select": {
          font: "inherit",
        },
      }}
    />
  </>
);
