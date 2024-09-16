import { Button } from '@mui/material'
import { blue } from '@mui/material/colors'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type LinkFieldProps = {
  link: string
  showLink: boolean
  children: ReactNode
}

export function LinkField({ link, children, showLink }: LinkFieldProps) {
  if (showLink) {
    return (
      <Button
        fullWidth
        component={Link}
        type='text'
        to={link}
        sx={{
          p: 0,
          textTransform: 'none',
          '.MuiOutlinedInput-root': {
            cursor: 'pointer',
            zIndex: '-1',
          },
          input: {
            color: `${blue[700]} !important`,
            WebkitTextFillColor: `${blue[700]} !important`,
          },
        }}
      >
        {children}
      </Button>
    )
  }

  return <>{children}</>
}
