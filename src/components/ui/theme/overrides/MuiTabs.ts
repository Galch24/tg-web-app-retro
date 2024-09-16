import { Components } from '@mui/material/styles/components'
import { Theme } from '@mui/material/styles/createTheme'

export const MuiTabs: Components<Omit<Theme, 'components'>> = {
  MuiTabs: {
    styleOverrides: {
      root: {
        '.MuiTab-root': {
          textTransform: 'initial',
        },
      },
    },
  },
}
