import { Components } from '@mui/material/styles/components'
import { Theme } from '@mui/material/styles/createTheme'

export const MuiFormControlLabel: Components<Omit<Theme, 'components'>> = {
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        '&.Mui-disabled': {
          color: 'rgba(0, 0, 0, 1)',
        },
      },
      root: {
        '&.Mui-disabled': {
          opacity: '0.6',
        },
      },
    },
  },
}
