import React, { Component } from "react";
import s from "./Auth.module.css";

const Auth = () => {
  return (
    <div className={s.container}>
      <div className={s.topTextContainer}>
        <p className={s.topText}>
          Уже зарегистрированы? <a href="/enter">Войдите</a>
        </p>
      </div>
      <div className={s.registration}>
        <p className={s.regTitle}>Регистрация</p>
        <form className={s.regForm}>
          <div>
            <input type="text" placeholder="Полное имя" />
          </div>
          <div>
            <input type="text" placeholder="Имя пользователя" />
          </div>
          <div>
            <input type="text" placeholder="E-mail" />
          </div>
          <div>
            <input type="password" placeholder="Пароль" />
          </div>
          <div>
            <button className={s.buttonReg}>Зарегистрироваться</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
