import { createTheme } from "@mui/material";
import { MuiButton } from "./overrides/MuiButton";
export const MuiTheme = createTheme({
  components: {
    ...MuiButton,
  },
});
