import React from "react"
import S from "./Authoriz.module.css"

function Authoriz() {
  return (
    <>
      <section className={S.box}>
        <section className={S.header}>
          <div className={S.header__logo}>
            {/* ? */}
            <img className={S.header__logo} src="../img/logo.png" alt="" />
          </div>
        </section>

        <section className={S.form}>
          <h1 className={S.form__title}>Вход в Sirius Future</h1>
          <div className={S.form__inputs}>
            <input className={S.form__inputss} type="text" />
            <input className={S.form__inputsb} type="text" />
            <div className={S.form__remember}>
              <input
                className={S.form__rememberOne}
                type="checkbox"
                id="loginRemember"
                name="loginRemember"
              />
              <label
              // for="loginRemember"
              >
                Запомнить меня
              </label>
            </div>
          </div>
          <button className={S.form__button}>Войти</button>
          <div className={S.form__txt}>
            <a className={S.form__txtOne} href="#">
              Я забыл пароль
            </a>
            <a className={S.form__txtTwo} href="#">
              Войти как тренер
            </a>
          </div>

          <div className={S.form__questions}>
            <a className={S.form__txtThree}>Нет аккаунта?</a>
            <a className={S.form__txtFour} href="#">
              Зарегестрироваться
            </a>
          </div>
        </section>

        <section className={S.footer}>
          <div className={S.footer__img}>
            <img src="../img/lang.png" alt="" />
          </div>
        </section>
      </section>
    </>
  )
}

export default Authoriz
