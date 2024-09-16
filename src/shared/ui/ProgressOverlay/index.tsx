import {
  Box,
  BoxProps,
  CircularProgress,
  CircularProgressProps,
  styled,
  Typography,
} from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  loading?: boolean
  progressProps?: CircularProgressProps
  title?: string
} & BoxProps

const ProgressWrap = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  font-size: 0;
  text-align: center;
  z-index: 1;
`

export function ProgressOverlay({
  children,
  loading,
  progressProps,
  title,
  ...boxProps
}: Props) {
  return (
    <Box
      sx={{
        position: 'relative',
        '&:before': {
          content: "''",
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          background: 'rgba(255, 255, 255, 0.7)',
          opacity: loading ? 1 : 0,
          visibility: loading ? 'visible' : 'hidden',
          transition: '0.3s visibility ease, 0.3s opacity ease',
        },
      }}
      {...boxProps}
    >
      {children}
      <ProgressWrap hidden={!loading}>
        <CircularProgress {...progressProps} />
        {title && <Typography fontWeight={500}>{title}</Typography>}
      </ProgressWrap>
    </Box>
  )
}
