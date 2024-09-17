import {mainDomen} from "@/shared/config/env";

interface INav {
  label: string;
  path?: string;
  id: string;
  offset?: number;
  offsetMobile?: number;
}

export const navData: INav[] = [
  {
    label: "Проекты",
    path: `${mainDomen}/#projects`,
    id: 'projects',
  },
  {
    label: "Новые проекты в этом году",
    path: `${mainDomen}/#new`,
    id: 'new',
  },
  {
    label: "Для цеха",
    path: `${mainDomen}/#tsekh`,
    id: 'tsekh',
  },
  {
    label: "Что автоматизировали",
    path: `${mainDomen}/#automate`,
    id: 'automate',
  },
];
