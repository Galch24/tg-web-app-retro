import { Components } from "@mui/material/styles/components";
import { Theme } from "@mui/material/styles/createTheme";
import { myPalette } from "@/assets/styles/myPallete";

export const MuiInputBase: Components<Omit<Theme, "components">> = {
  MuiInputBase: {
    styleOverrides: {
      root: {
        borderBottom: '1px solid #9F9F9F',
        borderRadius: '0 !important',
        borderWidth: '0 0 1px 0 !important',
        color: '#9F9F9F',

        '&:not(.MuiInputBase-multiline)': {
          height: '50px',
        },

        'input': {
          borderRadius: 0,
          height: '50px',
          boxSizing: 'border-box',
        },
        '.MuiOutlinedInput-notchedOutline': {
          borderWidth: '0 0 1px 0 !important',
        },
        '&.Mui-focused': {
          '.MuiOutlinedInput-notchedOutline': {
            borderWidth: '0 0 1px 0 !important',
            borderColor: `${myPalette.common.white}`,
          }
        },
        '&.Mui-error': {
          '.MuiOutlinedInput-notchedOutline': {
            borderWidth: '0 0 2px 0 !important',
            // minHeight: '57px',
          }
        }
      },
    },
  },
};
