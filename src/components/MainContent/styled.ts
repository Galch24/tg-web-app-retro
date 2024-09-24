import { styled, Box } from "@mui/material";

export const SBlockWrapper = styled("div")`
  height: 100vh;
  color: #333;
  font-weight: 400;
  margin-bottom: 40px;
  //border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  //padding: 24px;
  overflow: hidden;
  position: relative;
  /*
  background: radial-gradient(circle at 100% 100%, #000000 0, #000000 26px, transparent 26px) 0% 0%/28px 28px no-repeat,
            radial-gradient(circle at 0 100%, #000000 0, #000000 26px, transparent 26px) 100% 0%/28px 28px no-repeat,
            radial-gradient(circle at 100% 0, #000000 0, #000000 26px, transparent 26px) 0% 100%/28px 28px no-repeat,
            radial-gradient(circle at 0 0, #000000 0, #000000 26px, transparent 26px) 100% 100%/28px 28px no-repeat,
            linear-gradient(#000000, #000000) 50% 50%/calc(100% - 4px) calc(100% - 56px) no-repeat,
            linear-gradient(#000000, #000000) 50% 50%/calc(100% - 56px) calc(100% - 4px) no-repeat,
            radial-gradient(at 0% 90%, rgba(0,0,0,0.7) 0%, rgba(116,218,227,0.7) 100%),
            radial-gradient(at 70% 70%, rgba(128,15,255,0.7) 0%, rgba(13,46,56,0.7) 100%);
  */
  //background: rgb(33, 50, 92);
  //background: radial-gradient(
  //  circle,
  //  rgba(33, 50, 92, 0.8113620448179272) 0%,
  //  rgba(98, 9, 121, 0.7301295518207283) 35%,
  //  rgba(0, 157, 255, 0.6825105042016807) 100%
  //);
  //
  //padding: 2px;
  box-sizing: border-box;

  h2 {
    color: #141aff;
    font-size: 24px;
    line-height: 120%;
  }
`;

export const ListWrapper = styled("div")`
  gap: 10px;
  display: flex;
  //align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  position: absolute;
  left: 32px;
  top: 60px;
  padding-right: 20px;

  ul {
    &:nth-child(2) {
      min-width: 80px;

      > li {
        margin-bottom: 40px !important;
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
