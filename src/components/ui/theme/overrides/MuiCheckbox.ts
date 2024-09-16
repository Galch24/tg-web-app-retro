import { blue } from '@mui/material/colors'
import { Components } from '@mui/material/styles/components'
import { Theme } from '@mui/material/styles/createTheme'

export const MuiCheckbox: Components<Omit<Theme, 'components'>> = {
  MuiCheckbox: {
    styleOverrides: {
      root: {
        padding: '8px',
        '&.Mui-disabled.Mui-checked': {
          color: blue[700],
          opacity: '0.8',
        },
      },
    },
  },
}
