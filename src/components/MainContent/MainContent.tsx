import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import {
  SBlockWrapper,
  SContentWrapper,
  ListWrapper,
} from "@/components/MainContent/styled";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MainActions } from "@/components/MainContent/ui/MainActions";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    title: "",
    id: "dev",
    list: [
      {
        marker: false,
        children: [
          <span>
            Средняя рента команды <strong>за 2024 год</strong>
          </span>,
          <span>Увеличили выручку с&nbsp;начала года</span>,
          <span>Сократили кол-во урезанных часов</span>,
        ],
      },
      {
        marker: false,
        children: [
          <span>
            <strong>63%</strong>
          </span>,
          <span>
            <strong>в 2 раза</strong>
          </span>,
          <span>
            <strong>на 80%</strong>
          </span>,
        ],
      },
    ],
  },
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
          <span>Т-Банк/ вёрстка баннеров и&nbsp;ХУД для CS:GO</span>,
          <span>Уралсиб/ вёрстка писем и&nbsp;баннеров</span>,
          <span>Достависта/ вёрстка писем и&nbsp;баннеров</span>,
          <span>ЯндексМаркет</span>,
        ],
      },
    ],
  },
  {
    title: "Новые проекты в этом году:",
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
          <span>Микросерфис для Битрикс24</span>,
          <span>Боты для&nbsp;HR и&nbsp;PM</span>,
          <span>Форма и&nbsp;ЛК для&nbsp;Ai премии</span>,
          <span>Сайт для web/dev</span>,
        ],
      },
    ],
  },
  {
    title: "Что автоматизировали:",
    id: "automate",
    list: [
      {
        marker: true,
        children: [
          <span>Развернули свой сервер в&nbsp;ЦЕХу</span>,
          <span>
            Настроили свой гитлаб и&nbsp;перенесли в&nbsp;него все проекты
          </span>,
          <span>
            Сделали бот, показывающий обновления в&nbsp;работе в&nbsp;ветках
            гитлаб
          </span>,
          <span>Собрали webpack, для ускорения работы над сайтами</span>,
          <span>Собрали шаблон для баннеров</span>,
          <span>
            Настроили свой шлюз для отправки смс кодов при регистрации
          </span>,
          <span>Создали свою базу знаний</span>,
        ],
      },
    ],
  },
];

export const MainContent = () => {
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
          ease: "sine.in",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "top 40%",
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
        y: "90vh",
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
    <Box ref={main} sx={{ width: "100%" }}>
      <div
        className={"hero"}
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          textTransform: "uppercase",
        }}
      >
        <h2
          style={{
            color: "#fff",
            fontSize: "82px",
            position: "absolute",
            zIndex: "9",
            textAlign: "left",
          }}
        >
          Dev Unit
        </h2>
      </div>
      {data.map(section => (
        <section id={section.id} key={section.id} className='section'>
          <SBlockWrapper>
            <SContentWrapper>
              <h2>{section?.title}</h2>
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
      <MainActions sectionId={"mainActions"} />
    </Box>
  );
};
