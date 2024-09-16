import { Components } from '@mui/material/styles/components'
import { Theme } from '@mui/material/styles/createTheme'

export const MuiChip: Components<Omit<Theme, 'components'>> = {
  MuiChip: {
    styleOverrides: {
      root: {
        '&.MuiChip-filledWarning': {
          backgroundColor: '#fc9432',
        },
        '&.MuiChip-filledInfo': {
          backgroundColor: '#4288d1',
        },
      },
    },
  },
}
