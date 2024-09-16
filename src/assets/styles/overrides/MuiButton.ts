import { Components } from "@mui/material/styles/components";
import { Theme } from "@mui/material/styles/createTheme";
import { myPalette } from "@/assets/styles/myPallete";

export const MuiButton: Components<Omit<Theme, "components">> = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
        padding: "8px 16px",
        fontSize: "14px",
        textTransform: "none",
        boxShadow: "none",
      },
      contained: {
        backgroundColor: myPalette.primary.main,
        color: "#fff",

        "&:hover": {
          backgroundColor: myPalette.secondary.main,
        },
      },
      sizeSmall: {
        padding: "8px 16px",
      },
      sizeMedium: {
        padding: "12px 20px",
      },
      sizeLarge: {
        padding: "14px 22px",
      },
    },
    defaultProps: {
      variant: "contained",
      size: "medium",
      disableElevation: true,
    },
  },
};
