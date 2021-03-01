import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Direction } from "../../../../data/constants";

import { PopUp } from "../../../pop-up/Pop-up";
import { sandBanersInfo, sandListServices } from "./data";

import "./styles.scss";

type SandMiningType = {};

export const SandMining: React.FC<SandMiningType> = () => {
  const [popup, setPopup] = useState<boolean>(false)

  const popapHandler = (arg: boolean) => {
    setPopup(arg)
  };

  return (
    <div className="sand">

      {popup && <PopUp popapHandler={popapHandler}/>}

      <div className="sand__wrapper">
        <h3 className="title-content">Добыча и намыв песка</h3>
  
        <p className="list__title">Что входит в услугу по добыче и намыву песков:</p>
        <ul className="list__wrapper">
          {sandListServices.map((text) => (
            <li className="list__items" key={text.id}>
              {" "}
              {text.text}{" "}
            </li>
          ))}
        </ul>
  
        <h3 className="sand__title title-content">Этапы сотрудничества</h3>
  
        <div className="sand__bnrWrapper">
          {sandBanersInfo.map((baner) => {
            return (
              <div className="sand__bnrCol" key={baner.id}>
                <div className="sand__bnrSvg-wr">
                  <img
                    src={baner.logo}
                    alt="loading..."
                    className="clianing__baner-svg"
                  />
                </div>
                <p className="clianing__baher-text">{baner.text}</p>
              </div>
            );
          })}
        </div>
  
        <p className="sand__text-titl">
          Стоимость услуг по добыче и намыву песка – <b>от 110 руб. за 1 м3</b>.
        </p>
  
        <p className="sand__text">
          В соответствии с проектом компания «Сапропель» осуществляет подбор
          техники для добычи строительных песков, исходя из условий заказчика.
          Такой подход позволяет обсудить реальный процесс производства работ,
          согласовать объёмы, сроки и стоимость выполнения работ. Вместе с
          заказчиком мы согласовываем выбор земснарядов, а при необходимости их
          варианты изготовления.
        </p>
  
        <div className="sand__button-wrapper">
          <div onClick={()=>{popapHandler(true)}} className="sand__button">Оставить заявку</div>
    
          <NavLink to={Direction.PFOTOS_WORK} className="sand__button">Фото работ</NavLink>
        </div>
  
          <NavLink to={Direction.SERVICES_JOBS} className="sand__button sand__button_footer">К видам работ</NavLink>

      </div>
    </div>
  );
};

