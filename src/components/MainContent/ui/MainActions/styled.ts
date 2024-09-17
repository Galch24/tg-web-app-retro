import {styled, Box, Button} from '@mui/material'

export const SBlockWrapper = styled('div')`
  color: #333;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 40px;
  padding: 24px 0;
  box-sizing: border-box;
  
  h2 {
    color: #21325c;
    margin-bottom: 24px;
  }
  
  ul > li {
    margin-bottom: 16px;
    position: relative;
    padding-left: 20px;
    
    &:before {
      content: '-';
      display: block;
      position: absolute;
      left: 0;
      top: 0.05em;
    }
  }
  table {
    width: 100%;
    td {
      border: none;
      padding: 5px 5px 5px 0;
      &:nth-of-type(2) {
        color: #21325c;
        font-weight: bold; 
        white-space: nowrap;
        padding-left: 10px;
      }
    }
  }
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
