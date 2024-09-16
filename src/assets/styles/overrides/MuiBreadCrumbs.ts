import { Components } from "@mui/material/styles/components";
import { Theme } from "@mui/material/styles/createTheme";
import { myPalette } from "@/assets/styles/myPallete";

export const MuiBreadCrumbs: Components<Omit<Theme, "components">> = {
  MuiBreadcrumbs: {
    styleOverrides: {
      root: {
        fontSize: "15px",
        fontWeight: 500,
        margin: '98px 0 67px 0',

        "& .MuiTypography-root": {
          color: myPalette.common.white,
          fontSize: "20px",
          fontWeight: 500,
          lineHeight: '101%',
        },
        "& .MuiBreadcrumbs-li": {
          fontSize: "20px",
          lineHeight: '101%',
          fontWeight: 500,
          minWidth: '150px'
        },
        "& .MuiBreadcrumbs-separator": {
          color: myPalette.common.white,
          fontSize: "20px",
          lineHeight: '101%',
          fontWeight: 500,
          margin: '0 48px'
        },
        "& a": {
          color: myPalette.common.white,
          fontSize: "20px",
          lineHeight: '101%',
          fontWeight: 500,
          textDecoration: "none",
        },
        "& .MuiBreadcrumbs-link": {
          color: myPalette.common.white,
          fontSize: "20px",
          lineHeight: '101%',
          fontWeight: 500,
          textDecoration: "none",
        },
      },
    },
  },
};
