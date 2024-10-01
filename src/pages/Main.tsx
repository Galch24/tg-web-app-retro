import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { styled } from "@mui/material";
import { Container } from "@/components/ui";
import { useEffect, useMemo, useRef, useState } from "react";

import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import VolumeOffOutlinedIcon from "@mui/icons-material/VolumeOffOutlined";

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

const VideoWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;

  video {
    margin-left: 40px;
    object-fit: cover;
    height: 250px;
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
`;

const MuteButton = styled("button")`
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 20px;
  border: none;
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
`;

const Main = () => {
  const [mute, setMute] = useState(true);
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
          <Container>
            <VideoWrapper>
              <video
                autoPlay
                loop={true}
                controls={false}
                style={{ width: "100%", height: "100%" }}
              >
                <source src={videoAlien} />
              </video>
            </VideoWrapper>
            <audio ref={audioRef} autoPlay loop muted={mute}>
              <source src={sound} type='audio/mp3' />
            </audio>
            <List>
              {quotes.map((item, index) => (
                <Item key={index}>
                  <q>{item}</q>
                </Item>
              ))}
            </List>
          </Container>
        </Block>
      </Layout>
    </>
  );
};

export default Main;
