import { formIcon, chancelleryIcon, writeIcon, workingIcon } from "../../../../assets/index";
import { v1 } from "uuid";

export const sandListServices = [
  { id: v1(), text: "Проведение изыскательных работ, оценка запасов залежи" },
  {
    id: v1(),
    text: "Расчет объемов и сроков выполнения реальных производственных задач",
  },
  {
    id: v1(),
    text:
      "Составление проектной документации на осуществление работ на основе полученных данных",
  },
  { id: v1(), text: "Монтаж и пуско-наладочные работы на объекте заказчика" },
  {
    id: v1(),
    text: "Проведение работ по гидронамыву песков силами наших специалистов",
  },
];
export const sandBanersInfo = [
  { id: v1(), logo: formIcon, text: "Лицензия на карьер" },
  { id: v1(), logo: chancelleryIcon, text: "Составляем проект на разработку" },
  { id: v1(), logo: writeIcon, text: "Составляем договор" },
  { id: v1(), logo: workingIcon, text: "Выполняем работы" },
];