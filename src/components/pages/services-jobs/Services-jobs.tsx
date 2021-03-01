import React from "react";
import { NavLink } from "react-router-dom";

import { servicesCards } from "../../../data/data";
import "./services-jobs.scss";

type ServicesJobsType = {};

export const ServicesJobs: React.FC<ServicesJobsType> = () => (
  <div className="servises">
    <h1 className="servises__title title-content">
      Выберите интересуюмую вас услугу
    </h1>

    <div className="servises__wrapper">
      <div className="servises__cards">
        {servicesCards.map((card) => {
          return (
            <div className="servises__column" key={card.id}>
              <div className="servises__logo-wrapper">
                <img
                  src={card.logo}
                  alt="loading..."
                  className="servises__logo"
                />
              </div>

              <NavLink to={card.path} className="servises__text">
                {card.title}
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);
