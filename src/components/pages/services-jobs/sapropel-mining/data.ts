import { v1 } from "uuid";
import { 
  ecoIcon, moleculeIcon, plantIcon, arrowsIcon,
  chancelleryIcon, writeIcon, workingIcon,} from "../../../../assets/index";

export const sapropelListServicesHeader = [
  { id: v1(), text: "Разработка проекта" },
  {
    id: v1(),
    text: "Подготовка места для работы",
  },
  {
    id: v1(),
    text: "Подготовка места для работы",
  },
  { id: v1(), text: "Монтаж и сборка оборудования" },
  { id: v1(), text: "Проведение работ по добыче сапропеля" },
];
export const sapropelListServicesFooter = [
  {
    id: v1(),
    text:
      "Частные фермерские хозяйства и агрофирмы",
  },
  {
    id: v1(),
    text: "Переработчики сапропеля в сухие и гранулированные удобрения",
  },
  { id: v1(), text: "Производители строительных материалов" },
  { id: v1(), text: "Грязелечебницы и санатории" },
];
export const sapropelBanersInfo = [
  { id: v1(), logo: ecoIcon, text: "Экологически чистое" },
  { id: v1(), logo: moleculeIcon, text: "Богато микроэлементами" },
  { id: v1(), logo: plantIcon, text: "Повышает плодородность почвы" },
  { id: v1(), logo: arrowsIcon, text: "Удерживает влагу" },
];
export const sapropelBanersStage = [
  { id: v1(), logo: chancelleryIcon, text: "Экологически чистое" },
  { id: v1(), logo: writeIcon, text: "Богато микроэлементами" },
  { id: v1(), logo: workingIcon, text: "Повышает плодородность почвы" },
];