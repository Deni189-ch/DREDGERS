import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { PopUp } from "../../pop-up/Pop-up";
import { Direction } from "../../../data/constants";
import { ttxNizhegorodets1, ttxNizhegorodets2, ttxNizhegorodets3 } from "./data";

import "./styles.scss";

type Ttx = {
  id: string
  title: string
  innings: number
  power: number
  depthMax: number
  depth: number
  text: string
};

type ModelType = {
  ttx?: Array<Ttx>
};

const Model: React.FC<ModelType> = ({ttx}) => {
  const [popup, setPopup] = useState<boolean>(false)

  const popapHandler = (arg: boolean) => {
    setPopup(arg)
  }

  return <>    
      {ttx && ttx.map((ttx:any) => {
        
        return (
          <div className="niz-model" key={ttx.id}>

            {popup && <PopUp popapHandler={popapHandler} />}
            
            <div className="niz-model__wrapper">
              <h3 className="niz-model__title">{ttx.title}</h3>
  
              <hr />
  
              <div className="niz-model__block-info">
                <div className="niz-model__img-wrapper">
                  <img src={ttx.logo} alt="loading..." className="niz-model__logo" />
                </div>
  
                <div className="niz-model__info-wrapper">
                  <p className="niz-model__info-title">
                    Технические характеристики:
                  </p>
  
                  <div className="niz-model__text-wrapper">
                    <p className="niz-model__info-text">
                      Подача насоса по пульпе м3/ч
                    </p>
  
                    <p className="niz-model__info-text niz-model__info-text_right">
                      {ttx.innings}
                    </p>
                  </div>
  
                  <hr />
  
                  <div className="niz-model__text-wrapper">
                    <p className="niz-model__info-text">Мощность насоса, кВт</p>
  
                    <p className="niz-model__info-text niz-model__info-text_right">
                      {ttx.power}
                    </p>
                  </div>
  
                  <hr />
  
                  <div className="niz-model__text-wrapper">
                    <p className="niz-model__info-text">
                      Максимальная глубина разработки, м
                    </p>
  
                    <p className="niz-model__info-text niz-model__info-text_right">
                      {ttx.depthMax}
                    </p>
                  </div>
  
                  <hr />
  
                  <div className="niz-model__text-wrapper">
                    <p className="niz-model__info-text">
                      Дальность транспортирования, м
                    </p>
  
                    <p className="niz-model__info-text niz-model__info-text_right">
                      {ttx.depth}
                    </p>
                  </div>
  
                  <hr />
  
                  <div className="niz-model__button-wrapper">
                    <div onClick={()=>{popapHandler(true)}} className="cards__button button">Покупка</div>
                    
                    <div onClick={()=>{popapHandler(true)}} className="cards__button button">Аренда</div>               
                  </div>
                </div>
              </div>
              <hr className="niz-model__margin-bottom"/>
  
              <p className="niz-model__text">
                  Земсняряд “Нижегородец-1” используется при расчистке русел рек, прудов, хозяйственных водоемов, каналов.
                   Обеспечивает намыв песка - 40 000 тонн в месяц. Вы можете купить земснаряд без технологических принадлежностей
                  - 4,5 млн. руб.
              </p>
  
              <p className="niz-model__text niz-model__text_footer">
                  Изготовим земснаряд или выполним работу на собственных мощностях.
              </p>
  
              <NavLink to={Direction.PFOTOS_WORK} className="button">О выполненных работах</NavLink>
              
            </div>
          </div>
        );
      })};
    </>
};

export const NizhegorodetsModel = () => <Model ttx={ttxNizhegorodets1}/>;
export const NizhegorodetsModel2 = () => <Model ttx={ttxNizhegorodets2}/>;
export const NizhegorodetsModel3 = () => <Model ttx={ttxNizhegorodets3}/>;
