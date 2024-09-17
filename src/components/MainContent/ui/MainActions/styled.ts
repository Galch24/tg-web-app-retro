import {styled, Box, Button} from '@mui/material'

export const SBlockWrapper = styled('div')`
  color: #333;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 40px;
  padding: 24px 0;
  box-sizing: border-box;
`
export const SActionButton = styled(Button)`
  padding: 24px;
  border-radius: 22px;
  background-color: #000;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: normal;
  
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
  }
`
export const SButtonClose = styled(Button)`
  background-color: transparent;
  color: #333;
  font-size: 18px;
  line-height: 1.25;
  padding: 12px 24px;
  cursor: pointer;
  border-color: rgba(0,0,0,.5);
`
