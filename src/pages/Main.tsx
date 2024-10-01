import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { styled } from "@mui/material";
import { Container } from "@/components/ui";
import { useEffect, useMemo, useRef, useState } from "react";

import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import VolumeOffOutlinedIcon from "@mui/icons-material/VolumeOffOutlined";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import videoAlien from "@/assets/video/alien.mp4";
import sound from "@/assets/sound/sound.mp3";

const quotes = [
  "Прод — это когда все работает, но" + " никто не знает, почему.",
  "Дедлайны — это просто рекомендованные даты.",
  "Чем больше" + " костылей, тем ближе к продакшену.",
  "Рефакторинг — это когда ты переделываешь старые баги в новые.",
  "Код должен быть понятен только тому, кто его писал.",
];

const Block = styled("div")`
  padding: 40px 0 120px 0;
`;

const Hero = styled("div")`
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
  }
`;

const ArrowIcon = styled("div")`
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

const VideoWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;

  video {
    margin-left: 40px;
    object-fit: cover;
    width: 100%;
    height: 300px;
  }
`;

const QuotesBlock = styled("div")`
  padding-top: 40px;

  h2 {
    font-size: 32px;
    width: 100%;
    margin-bottom: 40px;
    letter-spacing: 1.5px;
  }
`;

const List = styled("ul")`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const Item = styled("ul")`
  quotes: "«" "»" "‹" "›";
  font-size: 28px;
  font-style: italic;
`;

const MuteButton = styled("button")`
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
`;

const Main = () => {
  const [mute, setMute] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const audioRef = useRef(null);
  const blockRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const block = blockRef.current;
      if (block) {
        const blockBottom = block.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        setShowNavBar(blockBottom < windowHeight + 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMuteClick = () => {
    setMute(prevMute => !prevMute);
  };

  return (
    <>
      <Helmet>
        <title>Ретро 2024</title>
      </Helmet>
      <Layout showNavBar={showNavBar}>
        <Block id='block' ref={blockRef}>
          <MuteButton onClick={handleMuteClick}>
            {mute ? <VolumeOffOutlinedIcon /> : <VolumeUpOutlinedIcon />}
          </MuteButton>
          <Hero>
            <Container>
              <h1>
                DEV UNIT -<br /> спешит на помощь
              </h1>
              <VideoWrapper>
                <video autoPlay loop={true} controls={false}>
                  <source src={videoAlien} />
                </video>
              </VideoWrapper>

              <ArrowIcon>
                <ArrowDownwardIcon />
              </ArrowIcon>
            </Container>
          </Hero>
          <Container>
            <QuotesBlock>
              <h2> Цитаты великих разработчиков:</h2>
              <List>
                {quotes.map((item, index) => (
                  <Item key={index}>
                    <q>{item}</q>
                  </Item>
                ))}
              </List>
            </QuotesBlock>
          </Container>

          <audio ref={audioRef} autoPlay loop muted={mute}>
            <source src={sound} type='audio/mp3' />
          </audio>
        </Block>
      </Layout>
    </>
  );
};

export default Main;
