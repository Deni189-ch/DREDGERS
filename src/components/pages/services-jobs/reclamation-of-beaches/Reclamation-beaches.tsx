import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { PopUp } from '../../../pop-up/Pop-up';
import { Direction } from '../../../../data/constants';
import { beachesBanersInfo, beachesListServicesHeader } from './data';

import "./styles.scss";

type ReclamationBeachesType = {}

export const ReclamationBeaches: React.FC<ReclamationBeachesType> = () => {
  const [popup, setPopup] = useState<boolean>(false)

  const popapHandler = (arg: boolean) => {
    setPopup(arg)
  };

  return (
    <div className="beaches">
      {popup && <PopUp popapHandler={popapHandler}/>}

     <div className="beaches__wrapper">
        <h3 className="title-content">Намыв пляжей</h3>
  
        <p className="list__title">Что входит в услугу по намыву пляжей:</p>
        <ul className="list__wrapper">
          {beachesListServicesHeader.map((text) => ( <li className="list__items" key={text.id}> {text.text} </li> ))}
        </ul>
  
        <h3 className="beaches__title title-content">Этапы сотрудничества</h3>
  
        <div className="beaches__bnrWrapper">
          {
          beachesBanersInfo.map((baner) => {
            return (
              <div className="beaches__bnrCol" key={baner.id}>
                <div className="beaches__bnrSvg-wr">
                  <img
                    src={baner.logo}
                    alt="loading..."
                    className="beaches__baner-svg"
                  />
                </div>
                <p className="beaches__baner-text">{baner.text}</p>
              </div>
            );
          })
          }
        </div>
  
        <p className="list__title">Преимущества метода гидронамыва пляжа:</p>
        <ul className="list__wrapper">
          {beachesListServicesHeader.map((text) => ( <li className="list__items" key={text.id}> {text.text} </li> ))}
        </ul>
  
        <div className="beaches__button-wrapper">
          <div onClick={()=>{popapHandler(true)}} className="beaches__button">Оставить заявку</div>
  
          <div className="beaches__button ">Подробнее о виде работ</div>
  
          <NavLink to={Direction.PFOTOS_WORK} className="beaches__button">Фото работ</NavLink>
        </div>
  
        <div className="beaches__button-footer">
          <NavLink to={Direction.SERVICES_JOBS} className="beaches__button ">К видам работ</NavLink>
        </div>
        
     </div>
    </div>
  );
};

