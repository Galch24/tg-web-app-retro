import { styled, Box } from "@mui/material";

export const SPageContent = styled(Box)`
  /* background-image: linear-gradient(to right bottom, #f4fbfc, #f5fbfc, #f5fbfc, #f6fbfc, #f6fbfc);*/
  //background-image: linear-gradient(
  //  to top,
  //  #141aff,
  //  #1a1a80,
  //  #16166b,
  //  #0d0d66,
  //  #000000
  //);
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
  line-height: 120%;
  padding: 8px 18px;
  cursor: pointer;
  z-index: 7;
`;

export const Block = styled("div")`
  padding: 40px 0 120px 0;
`;

export const Hero = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 80px;

  h1 {
    font-size: 34px;
    margin-bottom: 40px;
    text-align: center;
    font-weight: 600;
    letter-spacing: 1px;

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

export const ArrowIcon = styled("div")`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  animation: moveArrow 2s ease-in-out infinite;

  @keyframes moveArrow {
    0%,
    100% {
      transform: translate(-50%, 0);
    }
    50% {
      transform: translate(-50%, 10px);
    }
  }
`;

export const VideoWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 40px;
    object-fit: cover;
    width: 100%;
    height: 300px;
  }
`;

export const QuotesBlock = styled("div")`
  padding-top: 40px;

  h2 {
    font-size: 32px;
    width: 100%;
    margin-bottom: 40px;
    letter-spacing: 1.5px;

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

export const List = styled("ul")`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Item = styled("li")`
  quotes: "«" "»" "‹" "›";
  font-size: 24px;
  font-style: italic;
`;

export const MuteButton = styled("button")`
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 20px;
  border: none;
  background: transparent;
  color: #fff;
  background: #000;
  border: 1px solid #fff;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  z-index: 10;

  p {
    font-size: 16px;
    margin-left: 5px;
  }
`;
