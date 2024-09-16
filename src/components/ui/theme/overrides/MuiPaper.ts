import { Components } from '@mui/material/styles/components'
import { Theme } from '@mui/material/styles/createTheme'

export const MuiPaper: Components<Omit<Theme, 'components'>> = {
  MuiPaper: {
    styleOverrides: {
      root: {
        // В выпадающем списке для высоты значения с пустой строкой
        '.MuiList-root .MuiMenuItem-root': {
          minHeight: '1.5rem',
        },
      },
    },
  },
}
