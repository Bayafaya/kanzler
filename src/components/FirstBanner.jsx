import React from "react";
import style from "./FirstBanner.module.scss";
import { ReactComponent as  LeftArrow} from "../assets/left_btn_arrow.svg";
import { ReactComponent as  Phone} from "../assets/phone.svg";
function FirstBanner() {
  return (
    <div className={style.first_banner__block}>
      <div className={style.maim__text_block}>
        <h1>
          Канцелярия, товары <br /> для полиграфии
        </h1>
        <p>
        Основные направления – бумага и расходные материалы для полиграфии, поставки элитного кофе и чая, немецкого премиум пива.
        </p>
        <div>
          <span>Перейти в каталог</span>
          <LeftArrow/>
        </div>
      </div>
      <div className={style.contacts}>
        <Phone className={style.phone}/>
      </div>
    </div>
  );
}

export default FirstBanner;
