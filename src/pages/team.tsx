//@ts-nocheck

import React, { useState, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import { styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import team1 from "@/assets/img/team/1/photo.png";
import team2 from "@/assets/img/team/2/photo.png";
import team3 from "@/assets/img/team/3/photo.png";
import team4 from "@/assets/img/team/4/photo.png";
import team5 from "@/assets/img/team/5/photo.png";
import team5slide2 from "@/assets/img/team/5/slide2/2.mp4";
import team6 from "@/assets/img/team/6/photo.png";
import team7 from "@/assets/img/team/7/photo.png";
import team8 from "@/assets/img/team/8/photo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";
import "@/assets/styles/swiper.css";

interface Slide {
  text: string;
}

interface TeamMember {
  name: string;
  lastName: string;
  img: string;
  id: number;
  slides: Slide[];
}

const data: TeamMember[] = [
  {
    name: "Денис",
    lastName: "Симоненко",
    img: team1,
    slides: [
      {
        tags: ["Frontend developer", "Jun"],
        info: {
          features: ["Сова - любит" + " хорошо поспать ", "Игромен"],
          stack: "Vanila JS, HTML/CSS",
          desc: "Бог вики страниц, HTML баннеров и вёрстки писем",
        },
      },
      {
        img: "2",
      },
      {
        video: team5slide2,
      },
    ],
    id: 1,
  },
  {
    name: "Павел",
    lastName: "Заболотный",
    img: team2,
    slides: [
      {
        tags: ["Frontend developer", "Jun+"],
        info: {
          features: [
            "Стреляет из лука, как Леголас сын Трандуила ",
            "Гоняет на велике трезвым",
          ],
          stack: "Vanila JS, HTML/CSS",
          desc: "Не только Бог вики страниц, HTML баннеров и вёрстки писем, но фичу для КС ГО собрать могет",
        },
      },
      {
        img: "2",
      },
      {
        video: team5slide2,
      },
    ],
    id: 2,
  },
  {
    name: "Аня",
    lastName: "Саушкина",
    img: team3,
    slides: [
      {
        tags: ["Frontend developer", "Jun+"],
        info: {
          features: ["Обожает писать код и слушать музыку", "Часто хмурит лоб"],
          stack: "Vanila JS, HTML/CSS",
          desc: "Фигачет на Яндекс HR, как машина. Делает баннеры, вики странички и верстку лендингов",
        },
      },
      {
        img: "2",
      },
      {
        video: team5slide2,
      },
    ],
    id: 3,
  },
  {
    name: "Олег",
    lastName: "Ощепков",
    img: team4,
    slides: [
      {
        tags: ["Frontend developer", "Jun+++"],
        info: {
          features: [
            "Фанат Вархамера и пива ",
            "Душа юнита, по доброму зовем его Гендальф",
          ],
          stack: "Vanila JS, HTML/CSS",
          desc: "Может все! Залезет и разберется со всем, по тому что волшебник. Гуру верстки писем, может обсудить с сеошникими кто тут прав, заверстать лендинг и разобраться в Битрикс ",
        },
      },
      {
        img: "2",
      },
      {
        video: team5slide2,
      },
    ],
    id: 4,
  },
  {
    name: "Дмитрий",
    lastName: "Корнаухов",
    img: team5,
    slides: [
      {
        tags: ["Frontend developer", "Middle"],
        info: {
          features: [
            "Senior по пиву",
            "Любит смотреть документальные фильмы и увлекается историей",
          ],
          stack: "React/Next js, Vanila JS, HTML/CSS",
          desc: "Кодом превращает нарисованные вами сайты в рабочие, делает на них анимации и так, чтобы лид форму можно было заполнить и отправить.",
        },
      },
      {
        video: team5slide2,
      },
      {
        img: "3",
      },
    ],
    id: 5,
  },
  {
    name: "Галина",
    lastName: "Голавнова",
    img: team6,
    slides: [
      {
        tags: ["Frontend developer", "Senior", "Куратор"],
        info: {
          features: [
            "Бренчит на фортепиано для души. Фанат пеших прогулок.",
            "Пьет чай без сахара.",
          ],
          stack: "React, Vue JS, HTML/CSS, Typescript",
          desc:
            "Собирает приложения" +
            " и сервисы под задачи бизнеса. А также может подхватить вёрстку лендингов, писем, баннеров.",
        },
      },
      {
        img: "2",
      },
      {
        video: team5slide2,
      },
    ],
    id: 6,
  },
  {
    name: "Павел",
    lastName: "Толоконников",
    img: team7,
    slides: [
      {
        tags: ["Backend developer", "Senior", "Куратор"],
        info: {
          features: [
            "Катает на" + " байке и картингах",
            "Отец двоих детей",
            "Воспитывал дикого сокола, но решил его отпустить",
          ],
          stack: "PHP, GoLang",
          desc: "фиксик, который делает так, чтобы нажимая на кнопку чайника он начал закипать, только с сайтами и сервисами. Нажимая на кнопку с функционалом, она работает, по тому что Паша построил “механизм” который сработал.",
        },
      },
      {
        img: "2",
      },
      {
        video: team5slide2,
      },
    ],
    id: 7,
  },
  {
    name: "Анастасия",
    lastName: "Кокорева",
    img: team8,
    slides: [
      {
        tags: ["Unit manager"],
        info: {
          features: [
            "Может уйти жить в лес и выжить",
            "Пьет кофе с лимоном и медом ",
            "Прошла ДнД",
          ],
          stack:
            "Task and process management / Стала мамой 7ми человек в 29 лет.",
          desc: "Развивает юнит и настраивает в нем процессы. Что - то вечно тестирует и ругается за логи",
        },
      },
      {
        img: "2",
      },
      {
        video: team5slide2,
      },
    ],
    id: 8,
  },
];

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

const Item = styled("li")`
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
    border: 2px solid white;
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
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  img {
    background: #000;
    width: 100%;
    height: 100%;
  }
`;

const SlideWrapperVideo = styled("div")`
  width: 100%;
  height: 100%;

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

export const Team = () => {
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]); // Массив ссылок на видео

  const handleClickOpen = (member: TeamMember) => {
    setSelectedMember(member);
    setOpen(true);
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
          {data.map(item => (
            <Item key={item.id} onClick={() => handleClickOpen(item)}>
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
      </Block>
    </Layout>
  );
};
