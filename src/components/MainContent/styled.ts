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
    background: linear-gradient(90deg, #5468ff 20%, #c471ed 80%, #1b1771 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ListWrapper = styled("div")`
  display: flex;
  //align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  font-size: 16px;
  line-height: 120%;

  span {
    font-size: 20px;
    line-height: 120%;
  }

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
    min-height: 40px;
    font-size: 40px;
    line-height: 120%;
    margin-bottom: 48px;
    text-align: center;
    background: linear-gradient(90deg, #5468ff 20%, #c471ed 80%, #1b1771 90%);
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
export const Hero = styled("div")`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: #fff;
    position: absolute;
    zindex: 9;
    font-size: 82px;

    background: linear-gradient(
      91deg,
      #fff -16.56%,
      rgba(255, 255, 255, 0.9) -0.25%,
      rgba(255, 255, 255, 0) 142.87%
    );
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-position: top;
    background-repeat: no-repeat;
  }
`;
