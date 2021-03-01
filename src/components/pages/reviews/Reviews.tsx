import React from "react";
import img from "../../../assets/images/photos_3.jpg";
import "./styles.scss";

type ReviewsType = {};
export const Reviews: React.FC<ReviewsType> = () => (
  <div className="patents">
    <img src={img} alt="loading..." className="patents__img" />
  </div>
);
