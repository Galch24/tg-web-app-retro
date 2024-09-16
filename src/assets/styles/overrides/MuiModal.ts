import { Components } from "@mui/material/styles/components";
import { Theme } from "@mui/material/styles/createTheme";
import { myPalette } from "@/assets/styles/myPallete";

export const MuiModal: Components<Omit<Theme, "components">> = {
  MuiModal: {
    styleOverrides: {
      root: {},
    },
  },
};
