import React from "react";

import { photosImg2 } from "../../assets";
import "./styles.scss";

type PhotosWorksType = {};

export const PhotosWorks: React.FC<PhotosWorksType> = () => (
  <div className="photos-work">
    <p className="photos-work__text title-content">O выполненных работах</p>

    <div className="photos-work__wrapper">
      <img src={photosImg2} alt="loading..." className="patents__img" />
    </div>
  </div>
);
