import { createTheme, Theme } from "@mui/material/styles";

import {
  MuiBreadCrumbs,
  MuiButton,
  MuiInputBase,
  MuiInputLabel,
  MuiModal,
  MuiTabs,
  MuiTypography,
} from "./overrides";
import { myPalette } from "@/assets/styles/myPallete";
import { breakpointValues, mediaQueries } from "@/assets/styles/breakpoints";

const transitionTime: number = 0.4;
const transitionType: string = "ease";

declare module '@mui/material' {
  // Colors
  interface SvgIconPropsColorOverrides {
    white: true
  }
}

export const theme = createTheme({
  palette: myPalette,
  breakpoints: {
    values: breakpointValues,
  },
  transitions: {
    duration: {
      standard: transitionTime * 1000,
    },
    easing: {
      easeInOut: transitionType,
    },
  },
  typography: {
    fontFamily: ["Manrope", ""].join(","),
  },
  components: {
    ...MuiButton,
    ...MuiTypography,
    ...MuiModal,
    ...MuiTabs,
    ...MuiBreadCrumbs,
    ...MuiInputBase,
    ...MuiInputLabel,
  },
});

export const media = mediaQueries(theme);
