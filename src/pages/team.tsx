//@ts-nocheck

import React, { useState, useRef, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Button,
} from "@mui/material";
import { styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { teamList } from "@/data/team";

import teamImg from "@/assets/img/team/team.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { MainActions } from "@/components/MainContent/ui/MainActions";

import "swiper/swiper-bundle.css";
import "@/assets/styles/swiper.css";
import { Container } from "@/components/ui";
import { TapGame } from "@/components/TapGame/TapGame";

const Block = styled("div")`
  padding: 40px 0;
`;

const List = styled("ul")`
  display: flex;
  gap: 30px;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 0 20px;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled("li")<{ isViewed: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  img {
    width: 100%;
    min-width: 100px;
    object-fit: cover;
    height: 100px;
    border-radius: 50%;
    background: ${({ isViewed }) =>
      isViewed
        ? "#5b5b5b"
        : "linear-gradient(to right, #dcfdff, #6adcf0, #00cc99)"};
    padding: 4px;
  }
`;

const Name = styled("p")`
  font-size: 20px;
  line-height: 120%;
  margin-top: 10px;
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 30px;
  right: 15px;
  width: 34px;
  height: 34px;
`;

const PopupNameWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-bottom: 20px;

  span {
    font-weight: 500;
    font-size: 32px;
  }
`;

const SlideWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin-top: 80px;
  padding: 0 20px;
`;

const SlideWrapperImg = styled("div")`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: #000;
  }
`;

const SlideWrapperVideo = styled("div")`
  width: 100%;
  height: 100%;
  overflow: hidden;

  video {
    object-fit: cover;
  }
`;

const SlideTags = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  li {
    background: blue;
    color: #fff;
    font-size: 24px;
    border-radius: 30px;
    padding: 10px 15px;
  }
`;

const SlideInfoList = styled("div")`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const SlideInfoItem = styled("div")`
  font-size: 20px;

  ul {
    li {
      position: relative;
      padding-left: 20px;

      &::before {
        content: "-";
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
`;

const Wrapper = styled("div")`
  margin-top: 80px;

  h3 {
    font-size: 48px;
    line-height: 120%;
    margin-bottom: 20px;

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

  img {
    border-radius: 30px;
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }

  h4 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  button {
    width: 100%;
    background: #141aff;
    color: #fff;
    border-radius: 30px;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;

    a {
      color: inherit;
      width: 100%;
      height: 100%;
      display: block;
    }
  }
`;

export const Team = () => {
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [viewedItems, setViewedItems] = useState<number[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClickOpen = (member: TeamMember) => {
    setSelectedMember(member);
    setOpen(true);

    if (!viewedItems.includes(member.id)) {
      setViewedItems([...viewedItems, member.id]);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMember(null);
    videoRefs.current.forEach(video => {
      if (video) {
        video.pause();
      }
    });
  };

  const handleSlideChange = (swiper: any) => {
    videoRefs.current.forEach(video => {
      if (video) {
        video.pause();
      }
    });

    const currentVideo = videoRefs.current[swiper.activeIndex];
    if (currentVideo) {
      currentVideo.play();
    }
  };

  return (
    <Layout>
      <Block>
        <List>
          {teamList.map(item => (
            <Item
              key={item.id}
              onClick={() => handleClickOpen(item)}
              isViewed={viewedItems.includes(item.id)}
            >
              <img src={item.img} alt={item.name} />
              <Name>{item.name}</Name>
            </Item>
          ))}
        </List>

        <Dialog
          open={open}
          onClose={handleClose}
          fullScreen
          sx={{
            backgroundColor: "#000",
            "& .MuiPaper-root": {
              backgroundColor: "#000",
              color: "#fff",
            },
          }}
        >
          <DialogTitle
            sx={{
              height: "0",
              padding: "0",
            }}
          >
            <CloseButton
              onClick={handleClose}
              sx={{
                zIndex: "10",
                color: "#fff",
              }}
            >
              <CloseIcon />
            </CloseButton>
          </DialogTitle>
          <DialogContent
            sx={{
              padding: "0",
            }}
          >
            {selectedMember?.slides && (
              <Swiper
                spaceBetween={3}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                onSlideChange={handleSlideChange}
                style={{
                  width: "100%",
                  height: "100%",
                  overflowY: "auto",
                  backgroundColor: "#000",
                }}
              >
                {selectedMember?.slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    {slide?.info ? (
                      <SlideWrapper>
                        <PopupNameWrapper>
                          <span>{selectedMember?.name}</span>
                          <span>{selectedMember?.lastName}</span>
                        </PopupNameWrapper>
                        <SlideTags>
                          {slide?.tags.map(item => <li key={item}>{item}</li>)}
                        </SlideTags>
                        <SlideInfoList>
                          <SlideInfoItem>
                            <ul>
                              {slide.info.features.map(item => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </SlideInfoItem>
                          <SlideInfoItem>
                            <h4>Стеки:</h4>
                            <p>{slide.info.stack}</p>
                          </SlideInfoItem>
                          <SlideInfoItem>
                            <h4>На дизайнерском: </h4>
                            <p>{slide.info.desc}</p>
                          </SlideInfoItem>
                        </SlideInfoList>
                      </SlideWrapper>
                    ) : slide?.img ? (
                      <SlideWrapperImg>
                        <img
                          src={slide.img}
                          alt='Тут будет фотка или картинка'
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </SlideWrapperImg>
                    ) : slide?.video ? (
                      <SlideWrapperVideo>
                        <video
                          ref={el => (videoRefs.current[index] = el)}
                          onClick={e => {
                            const video = e.currentTarget;
                            if (video.paused) {
                              video.play();
                            } else {
                              video.pause();
                            }
                          }}
                          src={slide.video}
                          loop={true}
                          controls={false}
                          autoPlay={false}
                          muted={true}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </SlideWrapperVideo>
                    ) : null}
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </DialogContent>
        </Dialog>

        <Container>
          <Wrapper>
            <h3>DEV CLAN</h3>
            <img src={teamImg} alt={"команда"} />
            <Button>
              <a href={"https://tsekh.tech/"} target={"_blank"}>
                Наш сайт
              </a>
            </Button>
            <h4>Наш девиз: серьезно делать - это не интересно</h4>
            <p>
              Мы делаем работу с юмором, именно по - этому, с нами всегда легко
              выкатывать и деплоить любые задачи.
            </p>
            {/*<MainActions sectionId={"mainActions"} />*/}
          </Wrapper>
        </Container>
        <TapGame />
      </Block>
    </Layout>
  );
};
