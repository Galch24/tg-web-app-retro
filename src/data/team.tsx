import team1 from "@/assets/img/team/1/photo.png";
import team1slide2 from "@/assets/img/team/1/slide2/2.jpg";
import team1slide3 from "@/assets/img/team/1/slide3/3.jpg";
import team1slide4 from "@/assets/img/team/1/slide4/4.jpg";
import team2 from "@/assets/img/team/2/photo.png";
import team3 from "@/assets/img/team/3/photo.png";
import team4 from "@/assets/img/team/4/photo.png";
import team4slide2 from "@/assets/img/team/4/slide2/2.jpg";
import team4slide3 from "@/assets/img/team/4/slide3/3.jpg";
import team5 from "@/assets/img/team/5/photo.png";
import team5slide2 from "@/assets/img/team/5/slide2/2.mp4";
import team5slide3 from "@/assets/img/team/5/slide3/3.jpg";
import team5slide4 from "@/assets/img/team/5/slide4/4.jpg";
import team6 from "@/assets/img/team/6/photo.png";
import team6slide2 from "@/assets/img/team/6/slide2/2.jpg";
import team7 from "@/assets/img/team/7/photo.png";
import team8 from "@/assets/img/team/8/photo.png";
import team8slide2 from "@/assets/img/team/8/slide2/2.mp4";
import team8slide3 from "@/assets/img/team/8/slide3/3.jpg";
import team8slide4 from "@/assets/img/team/8/slide4/4.jpg";
import team8slide5 from "@/assets/img/team/8/slide5/5.jpg";

interface SlideInfo {
  features: string[];
  stack: string;
  desc: string;
}

interface Slide {
  tags?: string[];
  info?: SlideInfo;
  img?: string;
  video?: string;
}

interface TeamMember {
  name: string;
  lastName: string;
  img: string | object;
  id: number;
  slides: Slide[];
}
export const teamList: TeamMember[] = [
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
        img: team1slide2,
      },
      {
        img: team1slide3,
      },
      {
        img: team1slide4,
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
      // {
      //   img: "2",
      // },
      // {
      //   video: team5slide2,
      // },
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
      // {
      //   img: "2",
      // },
      // {
      //   video: team5slide2,
      // },
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
        img: team4slide2,
      },
      {
        img: team4slide3,
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
        img: team5slide3,
      },
      {
        img: team5slide4,
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
        img: team6slide2,
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
      // {
      //   img: "2",
      // },
      // {
      //   video: team5slide2,
      // },
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
        video: team8slide2,
      },
      {
        img: team8slide3,
      },
      {
        img: team8slide4,
      },
      {
        img: team8slide5,
      },
    ],
    id: 8,
  },
];
