import React, { useState, useEffect } from "react";
import { links } from "../../Data";
import { FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";

import "./header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);

  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="nav__logo text-cs">
          BSM
        </a>
        <div className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
          <div className="nav__data">
            <ul className="nav__list">
              {links.map(({ name, path }) => {
                return (
                  <li className="nav__item" key={path}>
                    <a href={path} className="nav__link text-cs">
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="header__socials">
              <a href="/" className="header__social-link">
                <FaTwitter />
              </a>
              <a href="/" className="header__social-link">
                <FaDribbble />
              </a>

              <a href="/" className="header__social-link">
                <FaBehance />
              </a>
            </div>
          </div>
        </div>

        <div className="nav__btns">
          <div className="theme__toggler">
            <BsSun />
          </div>

          <div
            className={`${
              showMenu ? "nav__toggle animate-toggle" : "nav__toggle"
            }`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
