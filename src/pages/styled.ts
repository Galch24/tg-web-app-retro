import { styled, Box } from "@mui/material";

export const SPageContent = styled(Box)`
  /* background-image: linear-gradient(to right bottom, #f4fbfc, #f5fbfc, #f5fbfc, #f6fbfc, #f6fbfc);*/
  background-image: linear-gradient(
    to top,
    #141aff,
    #1a1a80,
    #16166b,
    #0d0d66,
    #000000
  );
  padding-bottom: 40px;
`;

export const SButtonClose = styled(Box)`
  //position: fixed;
  //bottom: 30px;
  //right: 30px;
  background: #fff;
  color: #000;
  border-radius: 30px;
  font-size: 18px;
  line-height: 1.25;
  padding: 12px 24px;
  cursor: pointer;
  z-index: 7;
`;
