import { Components } from '@mui/material/styles/components'
import { Theme } from '@mui/material/styles/createTheme'

export const MuiFormControl: Components<Omit<Theme, 'components'>> = {
  MuiFormControl: {
    styleOverrides: {
      root: {
        marginBottom: '8px',
        // '&.Mui-focused': {
        //  color: myPalette.aliceBlue.main,
        // },
        '.MuiInputBase-input.Mui-disabled': {
          opacity: '0.5',
          backgroundColor: 'rgba(0,0,0,.15)',
        },
      },
    },
  },
}
