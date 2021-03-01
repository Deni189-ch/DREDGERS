import React from "react";
import { NavLink } from "react-router-dom";

import imgNino from "../../../assets/images/Nino.svg";
import { servicesCards, rentCards } from "../../../data/data";


//--
import { useState } from "react";
import { Input } from "antd";
//--
import "./styles.scss";

type MainType = {};
export const MainPage: React.FC<MainType> = () => {
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__title-wrapper main__wrapper">
          <p className="main__title-text">
            Производим земснаряды <br /> с 1988 года
          </p>
        </div>
      </div>

      <div className="main__services">
        <div className="main__title title-content">Наши услуги</div>

        <div className="main__services-wrapper main__wrapper">
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

      <div className="main__rent">
        <div className="main__title title-content">
          Аренда и покупка земснаряда
        </div>

        <div className="main__services-wrapper main__wrapper">
          {rentCards.map((card: any) => {
            return (
              <div className="cards__column" key={card.id}>
                <div className="cards__img-wrapper">
                  <img
                    src={card.logo}
                    alt="loading..."
                    className="cards__img"
                  />
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

                    <NavLink to={card.path} className="cards__button button">
                      Подробнее
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="main__info">
        <div className="main__title title-content">Почему выбирают нас?</div>

        <div className="main__info-wrapper main__wrapper">

          <div className="main__info-column">
            <p className="we-cards__text">Собственное производство</p>
          </div>
          <div className="main__info-column">
            <p className="we-cards__text">Собственное производство</p>
          </div>
          <div className="main__info-column">
            <p className="we-cards__text">Собственное производство</p>
          </div>
          <div className="main__info-column">
            <p className="we-cards__text">Собственное производство</p>
          </div>
          <div className="main__info-column">
            <p className="we-cards__text">Собственное производство</p>
          </div>

        </div>
      </div>

      <div className="location__info">
        <div className="main__title title-content">Как нас найти?</div>

        <div className="main__img-nino">
          <img src={imgNino} alt="loading..." className="main__img-card"/>
        </div>

      </div>

      <MainForm />
      
    </div>
  );
};


const { TextArea } = Input;

const MainForm: React.FC = () => {

  const [dataForm, setDataForm] = useState<any>([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [textarea, setTextarea] = useState("");
  const [error, setError] = useState("");

  const onchangeNameHandler = (e: any) => {
    setName(e.currentTarget.value);
  };
  const onchangePhoneHandler = (e: any) => {
    setPhone(e.currentTarget.value);
    (phone.length > 10 ) ? setError("Телефон введен не коректно") : setError("");    
  };
  const onchangeEmailHandler = (e: any) => {   
    setEmail(e.currentTarget.value);
    setTimeout(() => {
      (email.split('').includes('@') ) ? setError("") : setError("Email введен не коректно");   
    }, 4000);   
  };
  const onchangeTopicHandler = (e: any) => {   
    setTopic(e.currentTarget.value);  
  };
  const onchangeTextareaHandler = (e: any) => {
    setTextarea(e.currentTarget.value);
  };
  const handlerSubmit = (e: any) => {
    if (name.length !== 0 && phone.length !== 0 && email.length !== 0 && textarea.length !== 0) {
      const data = [{ name }, { phone }, { email }, { textarea }];
      setDataForm(data);
      setName("");
      setPhone("");
      setEmail("");
      setTextarea("");
      setError("");
      setTopic("");
      console.log(dataForm);
    } else {
      setError('Пожалуйста, заполните все поля')
    }

    e.preventDefault();
  };
  return (
    <div className="main__form">
    
    <div className="main__title title-content">Почему выбирают нас?</div>

     <div className="main__form-wrapper">
        
        <div className="main__form-column">
          <h3 className="main__form-title">Свяжитесь с нам:</h3>

          <form onSubmit={handlerSubmit}>
            <Input className="form__input" placeholder="Имя*" value={name}
            onChange={(e) => { onchangeNameHandler(e); }} />
    
            <Input className="form__input" placeholder="Телефон*" type="number" value={phone}
              onChange={(e) => { onchangePhoneHandler(e); }} />
    
            <Input className="form__input" placeholder="Email" value={email}
              onChange={(e) => { onchangeEmailHandler(e); }} />

            <Input className="form__input" placeholder="Тема" value={topic}
              onChange={(e) => { onchangeTopicHandler(e); }} />
              
    
            <TextArea className="form__textarea" placeholder="Ваше сообщение" rows={4}
              value={textarea} onChange={(e) => {onchangeTextareaHandler(e);}} />
    
            <p className="form__error">{error}</p>
            <input type="submit" value="Отправить" className="form__button button" />
          </form>
        </div>
  
        <div className="main__form-column-right">
            
            <p className="main__form-text_top">Мы оказываем высокий сервис нашим клиентам</p>
            <p className="main__form-text_bottom">Найдем оптимальное решение для Вас</p>
        </div>
        
     </div>

    </div>
  )
} 
