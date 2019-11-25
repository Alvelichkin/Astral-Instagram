import React, { Component } from "react";
import s from "./Enter.module.css";

const Enter = () => {
  return (
    <div className={s.container}>
      <div className={s.topTextContainer}>
        <p className={s.topText}>
          Нет аккаунта? <a href="/auth">Зарегистрируйтесь</a>
        </p>
      </div>
      <div className={s.registration}>
        <p className={s.regTitle}>Вход</p>
        <form className={s.regForm}>
          <div>
            <input type="text" placeholder="Имя пользователя или e-mail" />
          </div>
          <div>
            <input type="password" placeholder="Пароль" />
          </div>
          <div>
            <button className={s.buttonReg}>
              {" "}
              <a href="/" className={s.linkEnter}>
                Войти
              </a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Enter;
