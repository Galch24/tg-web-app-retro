import { Components } from '@mui/material/styles/components'
import { Theme } from '@mui/material/styles/createTheme'

export const MuiAutocomplete: Components<Omit<Theme, 'components'>> = {
  MuiAutocomplete: {
    styleOverrides: {
      root: {
        maxWidth: '100%',
        '& .Mui-disabled .MuiAutocomplete-tag': {
          opacity: '1',
        },
        '& .Mui-disabled .MuiChip-deleteIcon': {
          opacity: '0.3',
        },
      },
    },
  },
}
