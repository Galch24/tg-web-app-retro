interface CaseChild {
  title: React.ReactNode;
  desc: string | React.ReactNode;
  stack?: string[];
}

interface CaseWrapper {
  title: string;
  childs: CaseChild[];
}

export const cases: CaseWrapper[] = [
  {
    title: "Проекты за 6 месяцев",
    childs: [
      {
        title: (
          <span>
            <strong>Оптика 3Z</strong>&nbsp;&mdash; MarketPlace по&nbsp;продаже
            очков и&nbsp;линз.
          </span>
        ),
        desc:
          "Формирование и согласование ТЗ в процессе реализации, ежедневные синки с клиентом.\n" +
          "Сложные интеграции с Bitrix24, Битрикс Управление Сайтом (БУС), а также с сервисом доставки DPD.\n" +
          "Реализация онлайн оплаты с использованием эквайринга от СберБанка.\n" +
          "Разработка кастомных" +
          " решений по принципу микросервисной архитектуры.",
        stack: [
          "Laravel (PHP)",
          "React.js (JavaScript)",
          "Django (Python)",
          "Docker",
        ],
      },

      {
        title: (
          <span>
            <strong>МТС HR&nbsp;TTC&nbsp;| 2023/2024</strong>&nbsp;&mdash;
            Сервис по&nbsp;проведению события летнего&nbsp;IT фестиваля
            от&nbsp;МТС
          </span>
        ),
        desc:
          "Тендер с очень сжатыми сроками, на реализацию MVP — 1 месяц.\n" +
          "Формирование и согласование ТЗ в процессе реализации, множественные изменения сценария и архитектуры.\n" +
          "Интеграция с СМС-шлюзом, массовые E-mail рассылки, управление DNS, ежедневные бэкапы и выгрузка лидов.\n" +
          "Разработка кастомных решений по принципу микросервисной архитектуры.",
        stack: ["Laravel (PHP)", "React.js (JavaScript)", "Docker"],
      },

      {
        title: (
          <span>
            <strong>Wildberries</strong>&nbsp;&mdash; Продажи услуг
            по&nbsp;автоматизации складских помещений
          </span>
        ),
        desc: "Многостраничный сайт с интеграцией формы для Bitrix24.",
        stack: ["React.js (JavaScript)", "Next.js (TypeScript)"],
      },

      {
        title: (
          <span>
            <strong>СберМаркет</strong>&nbsp;&mdash; Форма обратной связи для
            привлечения клиентов
          </span>
        ),
        desc: "Одностраничный сайт на tilda, кастомизация функционала для интеграции с БД",
        stack: ["Laravel (PHP)", "JavaScript", "Docker"],
      },

      {
        title: (
          <span>
            <strong>Lighthouse</strong>&nbsp;&mdash; Сайт инвестиционного фонда
            для клиентов
          </span>
        ),
        desc:
          "Многостраничный сайт с интеграцией Strapi CMS (админ панель) и с сложными амимациями.\n" +
          "Рендеринг графиков с информацией о фондах и E-mail уведомления о новых лидах.",
        stack: [
          "React.js" + " (TypeScript)",
          "Next.js (TypeScript)",
          "Strapi CMS",
          "GSAP (анимация)",
        ],
      },
    ],
  },

  {
    title: "Наши проекты",
    childs: [
      {
        title: (
          <span>
            <strong>Тиньков HUD</strong>&nbsp;&mdash; Для проведения турниров
            в&nbsp;игре Counter-Srike
          </span>
        ),
        desc: (
          <>
            <span>
              Тиньков HUD - Для проведения турниров в игре Counter-Srike
              Декстопное приложение состоящие из HUD и админ панели. HUD -
              Интерфейс с входными данными из игры который в себя влючал:
            </span>
            <ul>
              <li>Информация о команде</li>
              <li>Информация об играках</li>
              <li>Карта</li>
              <li>
                Состояния матча (счёт общий/команд, время, информация о бомбе)
              </li>
            </ul>
            <span>Админ панель - управление настройками:</span>
            <ul>
              <li>Создание игрока</li>
              <li>Создание команды</li>
              <li>Управление счётом</li>
              <li>Кастомизация HUD</li>
            </ul>
          </>
        ),
        stack: ["React.js (JavaScript)", "Electron.js (JavaScript)"],
      },

      {
        title: (
          <span>
            <strong>Membrana (МТС)&nbsp;| B2B/B2C</strong>&nbsp;&mdash; Лендинг
            для сервиса интернет безопасности
          </span>
        ),
        desc:
          "Одностраничный сайт с настройкой сервера на стороне клиента.\n" +
          "Реализация форм обратной связи с интеграцией со стороним сервисом,\n" +
          "FullTime поддержка, внедрение новых фитч.",
        stack: ["React.js (JavaScript)"],
      },

      {
        title: (
          <span>
            <strong>Cosmos (МТС)</strong>&nbsp;&mdash; Лендинг для
            безопасной&nbsp;ОС
          </span>
        ),
        desc:
          "Одностраничный сайт с формами обратной связи.\n" +
          "FullTime поддержка," +
          " внедрение новых фитч.",
        stack: ["React.js (JavaScript)"],
      },

      {
        title: (
          <span>
            <strong>Яндекс HR</strong>
          </span>
        ),
        desc: (
          <>
            <span>Работа на конструкторе с устаревшей спецификацией кода.</span>
            <ul>
              <li>Wiki страници для сотрудников</li>
              <li>Лендинги на конструкторе Яндекс</li>
            </ul>
          </>
        ),
        stack: ["HTML/CSS", "Vanilla" + " JavaScript"],
      },

      {
        title: (
          <span>
            <strong>Банеры/Вёрстка E-mail писем</strong>
          </span>
        ),
        desc: (
          <>
            <ul>
              <li>Уралсиб</li>
              <li>Дестависта</li>
              <li>Яндекс Маркет</li>
              <li>Яндекс HR</li>
              <li>Т Банк</li>
              <li>МегаМаркет</li>
              <li>МТС</li>
            </ul>
          </>
        ),
      },
    ],
  },

  {
    title: "ЦЕХОВСКИЕ проекты",
    childs: [
      {
        title: <span>Микросервис для отчетов по логам:</span>,
        desc:
          'Знакомствои внедрение нового инструмента "NocoDB",\n' +
          "Интеграция с Bitrix24, структурирование данных",
      },

      {
        title: <span>Трекер времени:</span>,
        desc: "Приложение для Bitrix24 для упрощения процесса логирования по трекеру",
      },

      {
        title: <span>Боты для HR и ПМ:</span>,
        desc: "Парочка ботов для" + " оптимизации процессов HR и ПМ",
      },

      {
        title: <span>Ai Премия:</span>,
        desc: "Сервис для регистрации проектов на конкурс, а также личный кабинет жюри для оценки работ.",
      },

      {
        title: <span>Лендинг для WEB/DEV</span>,
        desc: "Лендинг пердоставления сообственных услуг",
      },
    ],
  },
];
