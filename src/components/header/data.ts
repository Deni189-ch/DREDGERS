import { Direction } from "../../data/constants";
import { v1 } from "uuid";

export const headerNav = [
  { id: v1(), nav: "виды работ", to: Direction.SERVICES_JOBS },
  { id: v1(), nav: "аренда и покупка земснаряда", to: Direction.RENT },
  { id: v1(), nav: "о компании", to: Direction.ABOUT_COMPANY },
  { id: v1(), nav: "патенты и изобретения", to: Direction.PATENTS },
  { id: v1(), nav: "отзовы", to: Direction.REVIEWS },
];

export const headerTitle =
  "производственное и опытно-конструкторское предприятие";
