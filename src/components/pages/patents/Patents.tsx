import React from "react";

import { photosImg1 } from "../../../assets";
import "./styles.scss";

type PatentsType = {};

export const Patents: React.FC<PatentsType> = () => (
  <div className="patents">
    <p className="patents__text title-content">Современные технологии</p>

    <div className="patents__wrapper">
      <img src={photosImg1} alt="loading..." className="patents__img" />
    </div>
  </div>
);
