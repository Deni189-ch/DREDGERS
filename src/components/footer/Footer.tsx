import React from "react";
import { NavLink } from "react-router-dom";

import { Direction } from "../../data/constants";
import "./styles.scss";

type FooterType = {};

export const Footer: React.FC<FooterType> = () => (
  <div className="footer">
    <div className="footer__wrapper">
      <NavLink to={Direction.MAIN_PAGE} className="footer__logo" />

      <div className="footer__column">
        <p className="footer__title FW-bold">Нижний Новгород:</p>
        <a href="tel:+79050140095" className="footer__phone">
          +7 (905) 014-00-95
        </a>
        <br />
        <a href="tel:4190607" className="footer__phone">
          419-06-07,
        </a>
        <a href="tel:4190608" className="footer__phone">
          419-06-08
        </a>
      </div>

      <div className="footer__column">
        <p className="footer__title FW-bold">Москва:</p>
        <a href="tel:+79104351329" className="footer__phone">
          +7 (910) 435-13-29
        </a>
        <br />
        <a href="tel:+70952344697" className="footer__phone">
          +7 (095) 234-46-97
        </a>
      </div>
    </div>
  </div>
);
