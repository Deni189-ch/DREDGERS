import React from "react";

import { NavLink } from "react-router-dom";
import { rentCards, rentTextFoter, rentTextHeader } from "./data";

import "./styles.scss";


type RentType = {};

export const Rent: React.FC<RentType> = () => {

  return (
    <div className="rent-page">
      
      <div className="rent-page__wrapper">
        <h1 className="rent-page__title title-content"> о земснарядах</h1>
        {
        rentTextHeader.map((text) => (
          <p key={text.id} className="rent-page__text">
            {text.text}
          </p>
        ))
        }
        <h1 className="rent-page__titl-to title-content"> наши земснаряды</h1>
  
        <div className="cards">
          {
          rentCards.map((card: any) => {
            return (
              <div className="cards__column" key={card.id}>
  
                <div className="cards__img-wrapper">
                  <img src={card.logo} alt="loading..." className="cards__img" />
                </div>
  
                <div className="cards__info">
                  <h3 className="cards__title">{card.title}</h3>
  
                  <p className="cards__text">
                    Намыв песка <br /> до {card.weight} тонн в месяц
                  </p>
  
                  <div className="cards__footer">
                    <p className="cards__text-footer">
                      От {card.price} млн. руб.
                    </p>  
  
                    <NavLink to={card.path} className="cards__button button">Подробнее</NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
  
        {
        rentTextFoter.map((text) => (
          <p key={text.id} className="rent-page__text">
            {text.text}
          </p>
        ))
        }
      </div>
    </div>
  );
};
