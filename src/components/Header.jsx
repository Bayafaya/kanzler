import React, { useEffect } from "react";
import {ReactComponent  as Logo}from '../assets/dashicons_facebook-alt.svg'
import {ReactComponent  as Phone}from '../assets/phone.svg'
import style from "./Header.module.scss";


function Header() {
   
  return (
    <header className={style.header}>
      <menu className={style.container}>
        <nav>
          <ul>
            <li>Каталог</li>
            <li>Акции</li>
            <li>Популярные товары</li>
            <li>Новинки</li>
            <li>Новости</li>
            <li>О компании</li>
            <li>Контакты</li>
          </ul>
        </nav>
        <div className={style.contacts}>
          <a href="#"><Logo className={style.mail}/> info@Kanzler.kg</a>
          <a href="#"><Phone className={style.phone}/>Позвонить</a>
        </div>
        <div className={style.hamburger}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </menu>
    </header>
  );
}

export default Header;
