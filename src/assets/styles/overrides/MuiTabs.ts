import { Components } from "@mui/material/styles/components";
import { Theme } from "@mui/material/styles/createTheme";
import { myPalette } from "@/assets/styles/myPallete";

export const MuiTabs: Components<Omit<Theme, "components">> = {
  MuiTabs: {
    styleOverrides: {
      root: {
        "base-Tabs-horizontal": {
          textTransform: "initial",
          color: "red",
        },
      },
    },
  },
};
