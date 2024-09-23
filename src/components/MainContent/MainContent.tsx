import React, {useRef, useState} from "react";
import { Box } from "@mui/material";
import {
  SBlockWrapper,
  SContentWrapper,
} from "@/components/MainContent/styled";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import {useWindowSize} from "@/hooks/useWindowSize";
import {MainActions} from "@/components/MainContent/ui/MainActions";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

export const MainContent = () => {
  const { windowWidth } = useWindowSize();
  const main = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [activeSlide, setActiveSlide] = useState<number>(0);

  return (
    <Box ref={main} sx={{ width: '100%' }}>
      <section id="dev">
        <div>
          <SBlockWrapper>
            <SContentWrapper>
              <h2>Dev Unit:</h2>
              <table>
                <tbody>
                <tr>
                  <td>
                    Средняя рента команды <strong>за 2024 год</strong>
                  </td>
                  <td>
                    63%
                  </td>
                </tr>
                <tr>
                  <td>
                    Увеличили выручку с начала года
                  </td>
                  <td>
                    в 2 раза
                  </td>
                </tr>
                <tr>
                  <td>
                    Сократили кол-во урезанных часов
                  </td>
                  <td>
                    на 80%
                  </td>
                </tr>
                </tbody>
              </table>
            </SContentWrapper>
          </SBlockWrapper>
        </div>
      </section>
      <section id="projects">
        <div>
          <SBlockWrapper>
            <SContentWrapper>
              <h2>Проекты:</h2>
              <ul>
                <li>
                  Яндекс HR /360 /Финтех/ вёрстка баннеров, писем,вики страниц, лендингов
                </li>
                <li>
                  МТС /Сайты Membrana и Cosmos
                </li>
                <li>
                  Т- Банк/ вёрстка баннеров и ХУД для CS:GO
                </li>
                <li>
                  Уралсиб/ вёрстка писем и баннеров
                </li>
                <li>
                  Достависта/ вёрстка писем и баннеров
                </li>
                <li>
                  ЯндексМаркет
                </li>
              </ul>
            </SContentWrapper>
          </SBlockWrapper>
        </div>
      </section>
      <section id="new">
        <div>
          <SBlockWrapper>
            <SContentWrapper>
              <h2>Новые проекты в этом году:</h2>
              <ul>
                <li>
                  Оптика 3Z/ разработка интернет-магазина на PHP, React и Bitrix24
                </li>
                <li>
                  МегаМаркет/ вёрстка писем и баннеров
                </li>
                <li>
                  Яндекс Драйв/ вёрстка лендингов
                </li>
                <li>
                  МТС HR TTC/ личный кабинет с авторизацией через смс и игровой механикой
                </li>
                <li>
                  Wildberries/ вёрстка многостраничного сайта с интеграцией форм
                </li>
                <li>
                  Lighthause/ вёрстка многостраничного сайта c подключением безголовной CMS
                </li>
                <li>
                  СберМаркет (Купер)/ вёрстка формы регистрации через смс с созданием базы данных
                </li>
              </ul>
            </SContentWrapper>
          </SBlockWrapper>
        </div>
      </section>
      <section id="tsekh">
        <div>
          <SBlockWrapper >
            <SContentWrapper>
              <h2>Для цеха:</h2>
              <ul>
                <li>
                  Микросерфис для Битрикс24
                </li>
                <li>
                  Боты для HR и PM
                </li>
                <li>
                  Форма и ЛК для Ai премии
                </li>
                <li>
                  Сайт для web/dev
                </li>
              </ul>
            </SContentWrapper>
          </SBlockWrapper>
        </div>
      </section>
      <section id="automate">
        <div>
          <SBlockWrapper>
            <SContentWrapper>
              <h2>Что автоматизировали:</h2>
              <ul>
                <li>
                  Развернули свой сервер в ЦЕХу
                </li>
                <li>
                  Настроили свой гитлаб и перенесли в него все проекты
                </li>
                <li>
                  Сделали бот, показывающий обновления в работе в ветках гитлаб
                </li>
                <li>
                  Собрали webpack, для ускорения работы над сайтами
                </li>
                <li>
                  Собрали шаблон для баннеров
                </li>
                <li>
                  Настроили свой шлюз для отправки смс кодов при регистрации
                </li>
                <li>
                  Создали свою базу знаний
                </li>
              </ul>
            </SContentWrapper>
          </SBlockWrapper>
        </div>
      </section>
      <MainActions sectionId={'mainActions'} />
    </Box>
  );
};
