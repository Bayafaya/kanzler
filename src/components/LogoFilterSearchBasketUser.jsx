import React from 'react'
import style from './LogoFilterSearchBasketUser.module.scss'
import logo from '../assets/logo.png'
import search from '../assets/search.svg'
import basket from '../assets/basket.svg'
import user from '../assets/user.svg'
import { ReactComponent as Kanzler } from '../assets/kanzler.svg'

function LogoFilterSearchBasketUser() {
 
  return (
    <div className={style.main__block}>
        <div className={style.logo}>
            <Kanzler className={style.kanzler}/>
            <img src={logo}alt="logo" />
        </div>
        <div className={style.catalog}>
          Каталог
        </div>
        <div className={style.search}>
        <img src={search} alt="search" />
        <input  type="text" list='products' placeholder='Найти товар'/>
        </div>
        <div className={style.buttons}>
        <button><img src={basket} alt="basket" /></button>
        <button><img src={user} alt="user" /></button>
        </div>
    </div>
  )
}

export default LogoFilterSearchBasketUser;