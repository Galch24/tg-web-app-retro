import {mainDomen} from "@/shared/config/env";

interface INav {
  label: string;
  path?: string;
  id: number;
}

export const navData: INav[] = [
  {
    label: "Проекты",
    path: `${mainDomen}/#projects`,
    id: 1,
  },
  {
    label: "Новые проекты в этом году",
    path: `${mainDomen}/#new`,
    id: 2,
  },
  {
    label: "Для цеха",
    path: `${mainDomen}/#tsekh`,
    id: 3,
  },
];
