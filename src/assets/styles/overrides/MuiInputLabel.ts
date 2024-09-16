import { Components } from '@mui/material/styles/components'
import { Theme } from '@mui/material/styles/createTheme'
import { myPalette } from '@/assets/styles/myPallete'

export const MuiInputLabel: Components<Omit<Theme, 'components'>> = {
  MuiInputLabel: {
    styleOverrides: {
      root: {
        position: 'relative',
        color: myPalette.common.white,
        '&.Mui-disabled': {
          color: 'rgba(0, 0, 0, 0.6)',
        },
        '&.Mui-focused': {
          color: myPalette.common.white,
        },
      },
    },
  },
}
