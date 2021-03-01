import React from "react";
import { NavLink } from "react-router-dom";
import { ScrollTo } from "react-scroll-to";
import { animateScroll as scroll } from "react-scroll";

import { Direction } from "../../data/constants";
import { headerNav, headerTitle } from "./data";

import "./styles.scss";

type HeaderType = {};
export const Header: React.FC<HeaderType> = () => {
  const scrollToBottom = () =>
    scroll.scrollToBottom({ duration: 3000, delay: 100, smooth: true });

  return (
    <div className="header">
      <NavLink to={Direction.MAIN_PAGE} className="header__logo" />
      <p className="header__title">{headerTitle}</p>

      <div className="header__wrapper">
        <div className="header__navigations">
          {headerNav.map((nav) => (
            <NavLink to={nav.to} className="header__nav" key={nav.id}>
              {nav.nav}
            </NavLink>
          ))}

          <ScrollTo>
            {({ scroll }) => (
              <span
                className="header__contact"
                onClick={() => {
                  scrollToBottom();
                }}
              >
                контакты
              </span>
            )}
          </ScrollTo>
        </div>
      </div>
    </div>
  );
};
