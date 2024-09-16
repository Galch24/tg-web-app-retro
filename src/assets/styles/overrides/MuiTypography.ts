import { Components } from "@mui/material/styles/components";
import { Theme } from "@mui/material/styles/createTheme";
import { myPalette } from "@/assets/styles/myPallete";
import { mediaQueries } from "@/assets/styles/breakpoints";
import { theme } from "@/assets/styles/Theme";

export const MuiTypography: Components<Omit<Theme, "components">> = {
  MuiTypography: {
    styleOverrides: {
      h1: {
        fontSize: "60px",
        lineHeight: "100%",
        fontWeight: "600",
        color: myPalette.common.black,

        "@media (min-width:768px)": {
          fontSize: "100px",
        },
      },
      h2: {
        // fontSize: "45px",
        lineHeight: "100%",
        fontWeight: "600",
        color: myPalette.common.black,

        "@media (min-width:768px)": {
          // fontSize: "85px",
        },
      },
      h3: {
        fontSize: "35px",
        lineHeight: "100%",
        color: myPalette.common.black,

        "@media (min-width:768px)": {
          fontSize: "70px",
        },
      },
      h4: {
        fontSize: "25px",
        lineHeight: "100%",
        fontWeight: "600",
        color: myPalette.common.black,

        "@media (min-width:768px)": {
          fontSize: "50px",
        },
      },
      h6: {
        fontSize: "20px",
        lineHeight: "100%",
        fontWeight: "400",
        color: myPalette.common.white,

        "@media (min-width:768px)": {
          fontSize: "16px",
        },
      },
    },
    defaultProps: {
      variant: "body1",
    },
  },
};
