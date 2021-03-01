import React, { useState } from "react";

import { Input } from "antd";
import "./styles.scss";

const { TextArea } = Input;

type PopUpType = {
  popapHandler: (arg: boolean)=> void
};

export const PopUp: React.FC<PopUpType> = ({popapHandler}) => {
  const [dataForm, setDataForm] = useState<any>([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [error, setError] = useState("");

  const setPopupAct = () => {
    popapHandler(false)
  }

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
      setError('')
      console.log(dataForm);
    } else {
      setError('Пожалуйста, заполните все поля')
    }

    e.preventDefault();
  };

 
  return <>
      <div className="popup">

      <div className="popup__wrapper">
      
        <div className="popup__exist-wrapper">
          <div className="popup__exist" onClick={setPopupAct} />
        </div>

        <p className="popup__text-header">
          Оставьте свои контакты, в ближайшее <br /> время с вами свяжется наш
          менеджер:
        </p>

        <form onSubmit={handlerSubmit}>
          <Input className="popup__input" placeholder="Имя*" value={name}
          onChange={(e) => { onchangeNameHandler(e); }} />

          <Input className="popup__input" placeholder="Телефон*" type="number" value={phone}
            onChange={(e) => { onchangePhoneHandler(e); }} />

          <Input className="popup__input" placeholder="Email*" value={email}
            onChange={(e) => { onchangeEmailHandler(e); }} />

          <TextArea className="popup__textarea" placeholder="Ваше сообщение" rows={4}
            value={textarea} onChange={(e) => {onchangeTextareaHandler(e);}} />

          <p className="popup__error">{error}</p>
          <input type="submit" value="Отправить" className="popup__button button" />
        </form>
      </div>
    </div>
  </>
};

