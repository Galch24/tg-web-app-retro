import { Components } from '@mui/material/styles/components'
import { Theme } from '@mui/material/styles/createTheme'

export const MuiList: Components<Omit<Theme, 'components'>> = {
  MuiListItem: {
    styleOverrides: {
      root: {
        marginBottom: '10px',
      },
    },
  },
  MuiListItemText: {
    styleOverrides: {
      root: {
        margin: '0',
        padding: '6px',
      },
    },
  },
}
