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
  WelcomeBlock,
} from "./styled";

import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import VolumeOffOutlinedIcon from "@mui/icons-material/VolumeOffOutlined";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import alien from "@/assets/video/alien.gif";
import sound from "@/assets/sound/sound.mp3";
import { Button } from "@mui/material";

const quotes = [
  "Прод — это когда все работает, но" + " никто не знает, почему.",
  "Дедлайны — это просто рекомендованные даты.",
  "Чем больше" + " костылей, тем ближе к продакшену.",
  "Рефакторинг — это когда ты переделываешь старые баги в новые.",
  "Код должен быть понятен только тому, кто его писал.",
];

const Main = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const blockRef = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (start) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [start]);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = 0.5;
    }

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

  const handleAudioToggle = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio?.pause();
    } else {
      audio?.play().catch((error: unknown) => {
        console.error("Error playing audio:", error);
      });
    }
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };

  const handleInitialPlay = () => {
    const audio = audioRef.current;

    if (audio) {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error: unknown) => {
          console.error("Error playing audio on initial click:", error);
        });
    }
  };

  const handleStart = () => {
    setStart(false);
    handleInitialPlay();
  };

  return (
    <>
      <Helmet>
        <title>Ретро 2024</title>
      </Helmet>
      <Layout showNavBar={!start && showNavBar}>
        {start && (
          <WelcomeBlock>
            <Button onClick={handleStart}>Начать</Button>
          </WelcomeBlock>
        )}
        <Block id='block' ref={blockRef}>
          <MuteButton
            onClick={isPlaying ? handleAudioToggle : handleInitialPlay}
          >
            {!isPlaying ? <VolumeOffOutlinedIcon /> : <VolumeUpOutlinedIcon />}
          </MuteButton>
          <Hero>
            <Container>
              <h1>
                DEV UNIT -<br /> спешит на помощь
              </h1>
              <VideoWrapper>
                <img src={alien} alt={"флекс"} />
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

          <audio ref={audioRef} loop>
            <source src={sound} type='audio/mp3' />
          </audio>
        </Block>
      </Layout>
    </>
  );
};

export default Main;
