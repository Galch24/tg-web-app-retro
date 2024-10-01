import { styled, Box } from "@mui/material";

export const SBlockWrapper = styled("div")`
  height: calc(100vh - 140px);
  color: #333;
  font-weight: 400;
  margin-bottom: 140px;
  border-radius: 30px;
  //padding: 24px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;

  h2 {
    color: #141aff;
    font-size: 24px;
    line-height: 120%;
    min-height: 30px;
  }
`;

export const ListWrapper = styled("div")`
  gap: 10px;
  display: flex;
  //align-items: center;
  justify-content: space-between;
  margin-top: 24px;

  ul {
    &:nth-child(2) {
      min-width: 80px;

      > li {
        margin-bottom: 10vw !important;
      }
    }
  }

  ul > li {
    margin-bottom: 16px;
    position: relative;
    font-size: 18px;
    line-height: 120%;
  }
`;

export const SContentWrapper = styled(Box)`
  padding: 32px;
  border-radius: 22px;
  background-color: #fff;
  height: 100%;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
  }
`;
