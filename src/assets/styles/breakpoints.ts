import { Theme } from "@mui/material/styles";
import { theme } from "@/assets/styles/Theme";

const size = {
  mobile: "320px",
  mobileM: "420px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1280px",
  desktopLarge: "1440px",
};

const breakpointValues = {
  xs: parseInt(size.mobile),
  sm: parseInt(size.mobileM),
  md: parseInt(size.tablet),
  lg: parseInt(size.laptop),
  xl: parseInt(size.desktop),
};

const mediaQueries = (theme: Theme) => ({
  mobile: `@media (min-width: ${theme.breakpoints.values.xs}px)`,
  mobileM: `@media (min-width: ${theme.breakpoints.values.sm}px)`,
  tablet: `@media (min-width: ${theme.breakpoints.values.md}px)`,
  laptop: `@media (min-width: ${theme.breakpoints.values.lg}px)`,
  desktop: `@media (min-width: ${theme.breakpoints.values.xl}px)`,
});

export { breakpointValues, mediaQueries };
