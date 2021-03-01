import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { PopUp } from "../../../pop-up/Pop-up";
import { Direction } from "../../../../data/constants";
import { sapropelBanersInfo, sapropelBanersStage, sapropelListServicesHeader } from "./data";

import "./styles.scss";

type SapropelMiningType = {};

export const SapropelMining: React.FC<SapropelMiningType> = () => {
  const [popup, setPopup] = useState<boolean>(false)

  const popapHandler = (arg: boolean) => {
    setPopup(arg)
  };

  return (
    <div className="sapropel">
       {popup && <PopUp popapHandler={popapHandler}/>}

      <div className="sapropel__wrapper">
        <h3 className="title-content">Добыча сапропеля</h3>
  
        <p className="list__title">Что входит в услугу по добыче сапропеля: </p>
        <ul className="list__wrapper">
          {sapropelListServicesHeader.map((text) => (
            <li className="list__items" key={text.id}>
              {" "}
              {text.text}{" "}
            </li>
          ))}
        </ul>
  
        <p className="sapropel__text">
          Добыча сапропеля ведется с мая и до начала заморозков.
        </p>
  
        <p className="sapropel__text">
          Проводимые работы экологически безопасны для водоёма и способствует его
          омоложению. Извлечение сапропеля очищает воду, что способствует
          разведению рыб.
        </p>
  
        <h3 className="sapropel__title title-content">сапропель как удобрение</h3>
  
        <div className="sapropel__bnr-wrapper">
          {sapropelBanersInfo.map((baner) => {
            return (
              <div className="sapropel__bnr-col"  key={baner.id}>
                <div className="sapropel__bnr-svg-wr">
                  <img
                    src={baner.logo}
                    alt="loading..."
                    className="sapropel__baner-svg"
                  />
                </div>
                <p className="sapropel__baher-text">{baner.text}</p>
              </div>
            );
          })}
        </div>
  
        <p className="sapropel__text">
          Сапропель это экологически чистое удобрение, которое богато: натрием,
          калием, фосфором, витаминами (B, E, C, D, P), аминокислотами и
          ферментами. В нём содержатся гуминовые кислоты, обеззараживающие почву,
          стимулирующие рост растений, подавляющие развитие болезнетворных
          микроорганизмов.
        </p>
  
        <p className="sapropel__text">
          Сапропель делает почвы более рыхлыми, формирует плодородный слой,
          увеличивает количество гумуса в грунте, позволяет сохранить
          плодородность земли на 3 – 5 лет. Субстрат, в который добавлен
          сапропель, удерживает влагу, поэтому почва реже требует полива.
        </p>
  
        <p className="sapropel__text">
          Использование сапропеля в качестве удобрения позволяет увеличить урожай
          овощей в 1, 5 раза.
        </p>
  
        <h3 className="sapropel__title title-content">Этапы сотрудничства</h3>
  
        <div className="clianing__bnr-wrapper">
          {
          sapropelBanersStage.map(baner => {
            return  <div className="clianing-col" key={baner.id}>
  
            <div className="clianing-svg-wr">
              <img src={baner.logo} alt="loading..." className="clianing__baner-svg"/>
            </div>
  
              <p className="clianing__baher-text">{baner.text}</p>
            
          </div>
          })
          }
        </div>
  
        <p className="list__title">Наши основные заказчики:</p>
        <ul className="list__wrapper">
          {sapropelListServicesHeader.map((text) => (
            <li className="list__items" key={text.id}> {text.text} </li> ))}
        </ul>
  
        <div className="sapropel__button-wrapper">
          <div onClick={()=>{popapHandler(true)}} className="clianing__button">Оставить заявку</div>
          
          <NavLink to={Direction.SERVICES_JOBS} className="clianing__button">К видам работ</NavLink>
        </div>
        
      </div>
    </div>
  );
};
