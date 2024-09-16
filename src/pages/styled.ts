import { styled, Box } from '@mui/material'

export const SSubtitle = styled(Box)`
  color: #fff;
  font-size: 20px;
  line-height: 1.25;
  margin-top: 34px;
  margin-bottom: 60px;
`
export const SFormHeader = styled(Box)`
  color: #fff;
  font-size: 48px;
  font-weight: 500;
  line-height: 1.01;
  margin-bottom: 60px;
`
export const SBoxLeft = styled(Box)`
  width: 604px;
  max-width: 48.5%;
  padding-right: 50px;
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
  }
`

export const SBoxRight = styled(Box)`
  width: calc(100% - 552px);
  max-width: 51.5%;
  
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
  }
`
