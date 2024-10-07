import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import {
  SBlockWrapper,
  SContentWrapper,
  ListWrapper,
  Hero,
} from "@/components/MainContent/styled";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    title: "",
    id: "dev",
    list: [
      {
        marker: false,
        children: [
          <div>
            <h3>
              Средняя рента команды <strong>за&nbsp;2024&nbsp;год</strong>
            </h3>
            <div className='rent'>
              <strong>63%</strong>
            </div>
          </div>,
          <div>
            <h3>Сократили количество урезанных часов</h3>
            <div className='rent'>
              <strong>на&nbsp;80%</strong>
            </div>
            <div>
              <h3>Подняли выручку до&nbsp;соответствия с&nbsp;планом</h3>
              {/*<div className='rent'>*/}
              {/*  <strong>в&nbsp;2&nbsp;раза</strong>*/}
              {/*</div>*/}
            </div>
            ,
          </div>,
        ],
      },
    ],
  },
  {
    title: <span>Закупили, собрали и&nbsp;настроили свой сервер:</span>,
    id: "automate",
    list: [
      {
        marker: true,
        children: [
          <span>Настраиваем сервер под наши нужды</span>,
          <span>
            Экономия на&nbsp;подписках и&nbsp;закупках облачных хранилищ
          </span>,
          <span>Гарантия конфиденциальности проектов</span>,
        ],
      },
    ],
  },

  {
    title: <span>Развернули и&nbsp;настроили свой Gitlab</span>,
    id: "automate",
    list: [
      {
        marker: true,
        children: [
          <span>Хранение исходников проектов</span>,
          <span>Внедрение инструмента для стандартизации работы</span>,
          <span>Удобство работы в&nbsp;команде над одним проектом</span>,
          <span>
            Интеграция с&nbsp;ТГ ботом для отслеживания изменений в&nbsp;ветках
            проекта
          </span>,
          <span>Code Review</span>,
        ],
      },
    ],
  },

  {
    title: <span>Quick Start Templates (шаблоны для экономии времени)</span>,
    id: "automate",
    list: [
      {
        marker: true,
        children: [
          <span>Webpack</span>,
          <span>Strapi CMS</span>,
          <span>Разметка для баннеров</span>,
          <span>Пакет для рассылки E-mail</span>,
          <span>Пакет для интеграции с&nbsp;СМС шлюзом</span>,
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
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: section,
            start: "top 35%",
            end: "top 30%",
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
    // gsap.fromTo(
    //   ".hero h2",
    //   { rotate: 0, y: 0, color: "#fff" },
    //   {
    //     rotate: 360,
    //     y: "68vh",
    //     x: 32,
    //     ease: "linear",
    //     color: "#141aff",
    //     fontSize: "24px",
    //     scrollTrigger: {
    //       trigger: ".hero",
    //       start: "top top",
    //       end: "bottom top",
    //       scrub: true,
    //     },
    //   },
    // );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Box ref={main} sx={{ width: "100%" }}>
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
    </Box>
  );
};
