import React, {useEffect, useRef} from "react";
import Layout from "@/components/layout/Layout";
import {
  ListWrapper,
  SBlockWrapper,
  SContentWrapper
} from "@/components/MainContent/styled";
import {Box} from "@mui/material";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const data = [
  {
    title: "Проекты:",
    id: "projects",
    list: [
      {
        marker: true,
        children: [
          <span>
            Яндекс HR&nbsp;/360 /Финтех/ вёрстка баннеров, писем, вики страниц,
            лендингов
          </span>,
          <span>МТС /Сайты Membrana и&nbsp;Cosmos</span>,
          <span>Т-Банк/ вёрстка баннеров и&nbsp;ХУД для&nbsp;CS:GO</span>,
          <span>Уралсиб/ вёрстка писем и&nbsp;баннеров</span>,
          <span>Достависта/ вёрстка писем и&nbsp;баннеров</span>,
          <span>ЯндексМаркет</span>,
        ],
      },
    ],
  },
  {
    title: "Новые проекты в&nbsp;этом году:",
    id: "new",
    list: [
      {
        marker: true,
        children: [
          <span>
            Оптика 3Z/&nbsp;разработка интернет-магазина на&nbsp;PHP, React
            и&nbsp;Bitrix24
          </span>,
          <span>МегаМаркет/ вёрстка писем и&nbsp;баннеров</span>,
          <span>Яндекс Драйв/ вёрстка лендингов</span>,
          <span>
            МТС HR&nbsp;TTC/ личный кабинет с&nbsp;авторизацией через смс
            и&nbsp;игровой механикой
          </span>,
          <span>
            Wildberries/ вёрстка многостраничного сайта с&nbsp;интеграцией форм
          </span>,
          <span>
            Lighthause/ вёрстка многостраничного сайта c&nbsp;подключением
            безголовной CMS
          </span>,
          <span>
            СберМаркет (Купер)/ вёрстка формы регистрации через смс
            с&nbsp;созданием базы данных
          </span>,
        ],
      },
    ],
  },
  {
    title: "Для цеха:",
    id: "tsekh",
    list: [
      {
        marker: true,
        children: [
          <span>Микросервис для Битрикс24</span>,
          <span>Боты для&nbsp;HR и&nbsp;PM</span>,
          <span>Форма и&nbsp;ЛК для&nbsp;Ai премии</span>,
          <span>Сайт для web/dev</span>,
        ],
      },
    ],
  },
];

export const Cases = () => {
  const main = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".section");

    sections.forEach((section: HTMLElement, index) => {
      const directionX = index % 2 === 0 ? -500 : 500;
      gsap.fromTo(
        section,
        {
          x: directionX,
          opacity: 0,
          scale: 0.5,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: section,
            start: "top 38%",
            end: "top 25%",
            scrub: true,
            pin: true,
            onEnter: () => {
              const listItems = section.querySelectorAll("li");
              listItems.forEach((item, index) => {
                gsap.fromTo(
                  item,
                  { opacity: 0, y: 30 },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    delay: index * 0.3,
                  },
                );
              });
            },
          },
        },
      );
    });
    gsap.fromTo(
      ".hero h2",
      { rotate: 0, y: 0, color: "#fff" },
      {
        rotate: 360,
        y: "68vh",
        x: 32,
        ease: "linear",
        color: "#141aff",
        fontSize: "24px",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Box ref={main} sx={{ width: "100%", marginBottom: "80px" }}>
      {data.map(section => (
        <section id={section.id} key={section.id} className='section'>
          <SBlockWrapper>
            <SContentWrapper>
              <h2 dangerouslySetInnerHTML={{
                __html: `${section?.title}`,
              }}
              />
              <ListWrapper>
                {section.list.map((listItem, listIndex) => (
                  <ul key={listIndex}>
                    {listItem.children.map((child, index) => (
                      <li
                        key={index}
                        style={{
                          paddingLeft: listItem.marker ? "20px" : "0",
                          position: "relative",
                          marginBottom: "16px",
                        }}
                      >
                        {child}
                        {listItem.marker && (
                          <span
                            style={{
                              content: "''",
                              display: "block",
                              position: "absolute",
                              left: "0",
                              top: "0.05em",
                              marginRight: "5px",
                            }}
                          >
                              -
                            </span>
                        )}
                      </li>
                    ))}
                  </ul>
                ))}
              </ListWrapper>
            </SContentWrapper>
          </SBlockWrapper>
        </section>
      ))}
    </Box>
  )
};
