import { Components } from '@mui/material/styles/components'
import { Theme } from '@mui/material/styles/createTheme'

export const MuiAccordion: Components<Omit<Theme, 'components'>> = {
  MuiAccordion: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        padding: '0',
        backgroundColor: 'transparent',
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        padding: '0',
        minHeight: '48px',
        '&.Mui-expanded': {
          minHeight: '48px',
        },
      },
      content: {
        padding: '0',
        margin: '0',
        '&.Mui-expanded': {
          margin: '0',
        },
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: '0',
      },
    },
  },
}
