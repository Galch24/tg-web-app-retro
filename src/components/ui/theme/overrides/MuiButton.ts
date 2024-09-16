import { Components } from "@mui/material/styles/components";
import { Theme } from "@mui/material/styles/createTheme";

export const MuiButton: Components<Omit<Theme, "components">> = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "20px",
        padding: "10px 20px",
        textTransform: "none",
      },
      text: {
        color: "blue",
      },
    },
  },
};
