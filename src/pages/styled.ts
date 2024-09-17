import { styled, Box } from '@mui/material'

export const SPageContent = styled(Box)`
  /* background-image: linear-gradient(to right bottom, #f4fbfc, #f5fbfc, #f5fbfc, #f6fbfc, #f6fbfc);*/
  background-image: linear-gradient(to right bottom, #f4fbfc, #f2fafe, #f2f8ff, #f5f6ff, #faf3ff);
  padding-bottom: 40px;
`

export const SButtonClose = styled(Box)`
  backgroun-color: #fff;
  font-size: 20px;
  line-height: 1.25;
  margin-bottom: 30px;
  padding: 12px 24px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
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
