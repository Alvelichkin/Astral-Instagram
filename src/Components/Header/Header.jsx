import React, { Component } from "react";
import s from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.logo}>Instagram</div>
        <div className={s.rightBlock}>
          <div>
          <a className={s.enterLink} href="/enter">
            <button className={s.enter}>
                Войти
            </button>
            </a>
          </div>
          <div className={s.reg}>
            <a className={s.regLink} href="/auth">
              Регистрация
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
