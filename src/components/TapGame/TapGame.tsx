//@ts-nocheck

import React, { useState } from "react";
import { styled } from "@mui/material";
import { keyframes } from "@emotion/react";
import { Container } from "@/components/ui";
import { Button } from "@mui/material";
import CoinImg from "@/assets/img/coin.png";

const Block = styled("div")`
  margin-top: 100px;

  h2 {
    font-size: 28px;
  }
`;

const GameContainer = styled("div")`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  position: relative;
`;

const TapArea = styled("div")`
  width: 100%;
  transition: transform 0.4s ease;
  //transform-style: preserve-3d;

  img {
    width: 100%;
    height: 380px;
    object-fit: cover;
  }
`;

const Score = styled("div")`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: -20px;
  //position: absolute;
  //top: 0;
  //left: 50%;
  //transform: translateX(-50%);
`;

const flyUp = keyframes`
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-100px);
        opacity: 0;
    }
`;

const PlusOne = styled("div")`
  position: absolute;
  color: #fff;
  font-size: 24px;
  animation: ${flyUp} 0.5s forwards;
`;

const DonationButton = styled(Button)`
  width: 100%;
  background: #141aff;
  color: #fff;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 600;
`;

export const TapGame = () => {
  const targetCoins = 50;
  const [score, setScore] = useState(0);
  const [plusOnePosition, setPlusOnePosition] = useState({
    x: 0,
    y: 0,
    visible: false,
  });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleTap = event => {
    const tapArea = event.currentTarget;
    const rect = tapArea.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      setScore(score + 1);
      setPlusOnePosition({ x, y, visible: true });

      setTimeout(() => {
        setPlusOnePosition({ ...plusOnePosition, visible: false });
      }, 500);

      const tiltX = (y / rect.height - 0.5) * 40;
      const tiltY = (x / rect.width - 0.5) * -40;
      setTilt({ x: tiltX, y: tiltY });
    }
  };

  return (
    <Block>
      <Container>
        <h2>Поддержи нас - набери 50 коинов</h2>
        <GameContainer>
          <Score>{score}</Score>
          <TapArea
            onClick={handleTap}
            style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          >
            <img src={CoinImg} alt={"DEVcoin"} />
          </TapArea>
          {plusOnePosition.visible && (
            <PlusOne
              style={{ left: plusOnePosition.x, top: plusOnePosition.y }}
            >
              +1
            </PlusOne>
          )}
        </GameContainer>
        {score >= targetCoins && (
          <DonationButton href={"https://tsekh.tech/"}>
            Задонатить
          </DonationButton>
        )}
      </Container>
    </Block>
  );
};
