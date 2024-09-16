import { Components } from '@mui/material/styles/components'
import { Theme } from '@mui/material/styles/createTheme'
import { myPalette } from '@/components/ui/theme'

export const MuiTextField: Components<Omit<Theme, 'components'>> = {
  MuiTextField: {
    defaultProps: {
      size: 'small',
    },
    styleOverrides: {
      root: {
        '&.Mui-focused': {
          borderColor: myPalette.common.white,
        },
      },
    },
  },
}
