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
    font-size: 28px;
    line-height: 120%;
    min-height: 30px;
    background: linear-gradient(90deg, #5468FF 20%, #C471ED 80%, #1B1771 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ListWrapper = styled("div")`
  gap: 10px;
  display: flex;
  //align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  font-size: 16px;
  line-height: 120%;

  ul > li {
    margin-bottom: 8px;
    position: relative;
  }
  
  h3 {
    font-size: 20px;
    line-height: 1.3;
    margin-bottom: 20px;
    text-align: center;
    font-weight: 500;
  }
  .rent {
    font-size: 36px;
    line-height: 0.9;
    margin-bottom: 48px;
    text-align: center;
    background: linear-gradient(90deg, #5468FF 20%, #C471ED 80%, #1B1771 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const SContentWrapper = styled(Box)`
  padding: 24px 32px;
  border-radius: 22px;
  background-color: #fff;
  height: 100%;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
  }
`;
