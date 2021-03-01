import { chancelleryIcon, writeIcon, workingIcon } from "../../../../assets/index";
import { v1 } from "uuid";

export const beachesListServicesHeader = [
  { id: v1(), text: "Разработка проекта" },
  {
    id: v1(),
    text: "Консультация в выборе земснаряда и необходимой техники",
  },
  {
    id: v1(),
    text:
      "Транспортировка земснаряда до места проведения работ",
  },
  { id: v1(), text: "Монтаж и пусконаладка на объекте заказчика" },
];
export const beachesListServicesFooter = [
  { id: v1(), text: "Позволяет намыть песок на месте, не неся расходов за его приобретение и доставку" },
  {
    id: v1(),
    text: "Уклон водоёма является естественным для намываемой фракции песка",
  },
  {
    id: v1(),
    text:
      "Намывной песок чище привозного",
  },
];
export const  beachesBanersInfo = [
  { id: v1(), logo: chancelleryIcon, text: "Составляем проект на разработку" },
  { id: v1(), logo: writeIcon, text: "Составляем договор" },
  { id: v1(), logo: workingIcon, text: "Выполняем работы" },
];