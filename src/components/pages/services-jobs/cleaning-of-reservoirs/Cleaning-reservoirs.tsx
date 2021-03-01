import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { cleaningBanersInfo, cleaningCardsInfo, cleaningMainTasks, cleaningPreparatoryWork,
   cleaningPriceFactor, cleaningServisesItems } from "./data";
import { PopUp } from "../../../pop-up/Pop-up";
import { Direction } from "../../../../data/constants";

import "./styles.scss";


type CleaningReservoirsType = {};

export const CleaningReservoirs: React.FC<CleaningReservoirsType> = () => {
  
  const [popup, setPopup] = useState<boolean>(false);

  const popapHandler = (arg: boolean) => {
    setPopup(arg)
  };

  return <>
    {popup && <PopUp popapHandler={popapHandler} />}

    <div className="clianing">

     <div className="clianing__wrapper">
        <h3 className="title-content">Очистка водоемов</h3>
  
        <p className="list__title">Что входит в услугу по очистке водоемов: </p>
        <ul className="list__wrapper" >
          { cleaningServisesItems.map(text => <li className="list__items" key={text.id}>{text.text}</li> ) }
        </ul>
  
        <div className="clianing__cards">
          {
          cleaningCardsInfo.map((card) => {
            return <div className="clianing__column" key={card.id}>
  
            <div className="clianing__img-wrapper">
              <img src={card.logo} alt="loading..." className="clianing__logo"/>
            <p className="clianing__text">{card.text}</p>
            </div>
  
          </div>
          })
          }
        </div>
  
        <p className="list__title">Этапы подготовительных работ, выполняемые нашими специалистами:</p>
        <ul className="list__wrapper">
          { cleaningPreparatoryWork.map(text => <li className="clianing__item list__items" key={text.id}>{text.text}</li> ) }
        </ul>
  
        <p className="clianing__text">
        Очистка осуществляется быстро и с минимальными затратами. Земснаряд способен эффективно собирать и откачивать илистые
         отложения, песок и мусор со дна водоёма с помощью грунтового насоса. За сутки земснаряд поднимает со дна водоема от 500 до 3000 м3 грунта.
          Собранные загрязнения транспортируются с водой по системе трубопроводов на специальные баржи или иловые карты, или укладываются в геотубы. Очистка водоёма ведётся круглосуточно в три смены.
        </p>
  
        <h3 className="clianing__title2 title-content">Этапы сотрудничества</h3>
        
        <div className="clianing__bnr-wrapper">
          {
          cleaningBanersInfo.map(baner => {
            return  <div className="clianing-col" key={baner.id}>
  
            <div className="clianing-svg-wr">
              <img src={baner.logo} alt="loading..." className="clianing__baner-svg"/>
            </div>
  
              <p className="clianing__baher-text">{baner.text}</p>
            
          </div>
          })
          }
        </div>
  
        <p className="clianing__paragraph list__title">Стоимость услуг по очистке водоёма – <b>от 120 руб. за 1 м3</b> вынутого грунта, и зависит от:</p>
        <ul className="list__wrapper">
          { cleaningPriceFactor.map(text => <li className="list__items" key={text.id}>{text.text}</li> ) }
        </ul>
  
        <div className="clianing__button-wrapper">
          <div onClick={()=>{popapHandler(true)}} className="clianing__button"> Оставить заявку</div>
  
          <div className="clianing__button"> Подробнее об очистке</div>
  
          <NavLink to={Direction.PFOTOS_WORK} className="clianing__button">Фото работ</NavLink>
        </div>
  
        <p className="list__title">Наши основные заказчики:</p>
        <ul className="list__wrapper">
          { cleaningMainTasks.map(text => <li className="list__items" key={text.id}>{text.text}</li> ) }
          <NavLink to={Direction.SERVICES_JOBS} className="clianing__button clianing__button_footer">К видам работ</NavLink>
          </ul>
          
     </div>
    </div>
  </>
};

