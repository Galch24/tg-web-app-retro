import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Container } from "@/components/ui";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Block,
  Hero,
  ArrowIcon,
  VideoWrapper,
  QuotesBlock,
  List,
  Item,
  MuteButton,
} from "./styled";

import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import VolumeOffOutlinedIcon from "@mui/icons-material/VolumeOffOutlined";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import videoAlien from "@/assets/video/alien.mp4";
import videoAlienWebm from "@/assets/video/alien.webm";
import sound from "@/assets/sound/sound.mp3";

const quotes = [
  "Прод — это когда все работает, но" + " никто не знает, почему.",
  "Дедлайны — это просто рекомендованные даты.",
  "Чем больше" + " костылей, тем ближе к продакшену.",
  "Рефакторинг — это когда ты переделываешь старые баги в новые.",
  "Код должен быть понятен только тому, кто его писал.",
];

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
                <video autoPlay loop={true} controls={false} preload='auto'>
                  <source src={videoAlienWebm} type='video/webm' />
                  <source src={videoAlien} type='video/mp4' />
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

          <audio ref={audioRef} autoPlay loop muted={mute} preload='auto'>
            <source src={sound} type='audio/mp3' />
          </audio>
        </Block>
      </Layout>
    </>
  );
};

export default Main;
