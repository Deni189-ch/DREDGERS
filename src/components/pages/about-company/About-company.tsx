import React from "react";

import {aboutImg1, aboutImg2, aboutImg3, aboutImg4} from "../../../assets";
import { AClistServices, AClistServicesFooter, ACompanyText } from "./data";

import "./styles.scss";


type AboutCompanyType = {};

export const AboutCompany: React.FC<AboutCompanyType> = () => {

  return (
    <div className="about-company">
        <h3 className="title-content">О компании</h3>
        <div className="title-content__line"/>

     <div className="about-company__wrapper">
  
        <div className="about-company__info-wrapper">
          <div className="about-company__column-left">
            <img src={aboutImg1} alt="loading..." className="about-company__img" />
  
            <div className="about-company__column-right">
              <img src={aboutImg2} alt="loading..." className="about-company__img-rigth"/>
  
              <p className="about-company__text-right">
                ОКБ «Ралснемг» Горьковского политехнического института (1965-1970 гг.)
              </p>
  
              <img src={aboutImg3}alt="loading..." className="about-company__img-rigth"/>
              
              <p className="about-company__text-right"> 
               Инженерный факультет Горьковского сельскохозяйственного института <br/>(1970-1997 гг.)
              </p>
            </div>
  
            {
            ACompanyText.map((text) => (
              <p key={text.id} className="about-company__text">
                {text.text}
              </p>
            ))
            }
          </div>
        </div>
  
        <p className="list__title">Наши заказчики сотрудничают с нами:</p>
        <ul className="list__wrapper">
          {AClistServices.map((text) => ( <li className="list__items" key={text.id}> {text.text} </li> ))}
        </ul>
  
        <p className="about-company__text FW-bold">
          О наших земснарядах вы можете узнать в соответствующем разделе: земснаряды
        </p>
        <p className="about-company__text">
          В настоящее время производство импортозамещающих отечественных земснарядов, выполнение работ по добыче сапропеля с использованием средств гидромеханизации, а также работ по расчистке и восстановлению водоёмов составляют основную деятельность компании «Сапропель».
        </p>
  
        <div className="about-company__info-footer">
          <div className="about-company__column-left">
            <img src={aboutImg4} alt="loading..." className="about-company__img" />
  
            {
            AClistServicesFooter.map((text) => (
              <p key={text.id} className="about-company__text">
                {text.text}
              </p>
            ))
            }
          </div>
        </div>
     </div>

    </div>
  );
};
