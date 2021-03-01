import { v1 } from "uuid";
import {
  Nizhegorodets1,
  Nizhegorodets2,
  Nizhegorodets3,
  windIcon,
  sandMining,
  umbrellaIcon,
  sapropelIcon,
} from "../assets";
import { Direction } from "./constants";

export const rentCards = [
  {
    id: v1(),
    logo: Nizhegorodets1,
    title: "Нижегородец-1",
    weight: "40 000",
    price: "4.5",
    path: "/nizhegorodets/1",
  },
  {
    id: v1(),
    logo: Nizhegorodets2,
    title: "Нижегородец-2",
    weight: "80 000",
    price: "7.9",
    path: "/nizhegorodets/2",
  },
  {
    id: v1(),
    logo: Nizhegorodets3,
    title: "Нижегородец-3",
    weight: "120 000",
    price: "13",
    path: "/nizhegorodets/3",
  },
];

export const servicesCards = [
  {
    id: v1(),
    logo: windIcon,
    path: Direction.CLEANING,
    title: "Очистка водоема",
  },
  {
    id: v1(),
    logo: sandMining,
    path: Direction.INWASH_SANDS,
    title: "Добыча и намыв песков",
  },
  {
    id: v1(),
    logo: umbrellaIcon,
    path: Direction.INWASH_BEACHES,
    title: "Намыв пляжей",
  },
  {
    id: v1(),
    logo: sapropelIcon,
    path: Direction.SAPROPEL_MINING,
    title: "Добыча сапропеля",
  },
];
