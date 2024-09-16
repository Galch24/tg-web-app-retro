import { Components } from '@mui/material/styles/components'
import { Theme } from '@mui/material/styles/createTheme'

export const MuiTypography: Components<Omit<Theme, 'components'>> = {
  MuiTypography: {
    variants: [
      {
        props: { variant: 'h2' },
        style: {
          fontSize: '22px',
          fontWeight: '700',
        },
      },
      {
        props: { variant: 'h3' },
        style: {
          fontSize: '18px',
          fontWeight: '700',
        },
      },
      {
        props: { variant: 'h6' },
        style: {
          fontSize: '14px',
          fontWeight: '400',
        },
      },
    ],
  },
}
