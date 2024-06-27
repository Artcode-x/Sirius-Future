import React from "react"
import S from "./Profile.module.css"
import { useNavigate } from "react-router-dom"

function Profile() {
  const navigate = useNavigate()
  const main = () => {
    navigate("/Profile")
  }

  const timeTable = () => {
    navigate("/Calendar")
  }
  return (
    <>
      <section className={S.container}>
        <header className={S.header}>
          <div className={S.header__info}>
            <div className={S.header__infoBox}>
              <a className={S.header__infoBoxTxt} href="#">
                Добро пожаловать,
                <a className={S.header__infoBoxUser} href="#">
                  Михаил
                </a>
                !
              </a>
            </div>
            <div className={S.header__block}>
              <img className={S.header__img} src="../../img/chat.png" alt="" />
              <img className={S.header__ava} src="../../img/user.png" alt="" />
            </div>
          </div>
        </header>

        <section className={S.desk}>
          <div className={S.desk__1}>
            <a className={S.desk__1txt} href="#">
              До 31 декабря любой курс со скидкой 20%
            </a>
            <a className={S.desk__1txt2} href="#">
              До конца года у вас есть уникальная возможность воспользоваться нашей новогодней скидкой 20% на
              любой курс!
            </a>
            <div className={S.desk__1Img}></div>
          </div>

          <div className={S.desk__2}>
            <a href="#" className={S.desk__2txt}>
              Следующее занятие начнется через:
            </a>

            <button className={S.desk__2Btn}>Button</button>
          </div>
          <div className={S.desk__3}>
            <div className={S.desk__3Title}>Баланс занятий</div>
            <div className={S.desk__3Block}>
              <a href="" className={S.desk__3BlockTxt1}>
                Ментальная Арифметика
              </a>
              <img
                // className={S.desk__3-block-img1}
                src="../../img/number.png"
                alt=""
              />
            </div>

            <div className={S.desk__3Block}>
              <a href="" className={S.desk__3BlockTxt2}>
                Программирование
              </a>
              <img
                //  className={S.desk__3-block2-img2}
                src="../../img/Ellipse 499.png"
                alt=""
              />
            </div>

            <div className={S.desk__3Block}>
              <a href="" className={S.desk__3BlockTxt3}>
                Скорочтение
              </a>
              <img
                //  className={S.desk__3-block2-img2}
                src="../../img/Ellipse 499.png"
                alt=""
              />
            </div>

            <button className={S.desk__3Btn}>Button</button>
          </div>
          <div className={S.desk__4}>
            <div className={S.desk__4Title}>Ближайшие уроки</div>
            <div className={S.desk__4Contain}>
              <div className={S.desk__4Block}>
                <div className={S.desk__4BlockContainer}>
                  <div className={S.desk__4BlockMounth}>мая</div>

                  <div className={S.desk__4BlockTxt}> Ментальная Арифметика</div>
                </div>
                <div className={S.desk__4BlockCount}>1</div>
                <div className={S.desk__4BlockTime}>14:00-14:25</div>
                <img className={S.desk__4BlockImg} src="../../img/Group (1) — копия.png" alt="" />
                <div className={S.desk__4BlockName}>Белкина Инна</div>
                <div className={S.desk__4BlockBtns}>
                  <button className={S.desk__4BlockBtnsBtn}>Button</button>
                  <button className={S.desk__4BlockBtnsBtn2}>Button</button>
                </div>
              </div>

              <div className={S.desk__4Block}>
                <div className={S.desk__4BlockContainer}>
                  <div className={S.desk__4BlockMounth}>мая</div>

                  <div className={S.desk__4BlockTxt}> Ментальная Арифметика</div>
                </div>
                <div className={S.desk__4BlockCount}>30</div>
                <div className={S.desk__4BlockTime}>11:00-11:11</div>
                <img className={S.desk__4BlockImg} src="../../img/Group (1) — копия.png" alt="" />
                <div className={S.desk__4BlockName}>Животновская</div>
                <div className={S.desk__4BlockBtns}>
                  <button className={S.desk__4BlockBtnsBtn}>Button</button>
                  <button className={S.desk__4BlockBtnsBtn2}>Button</button>
                </div>
              </div>

              <div className={S.desk__4Block}>
                <div className={S.desk__4BlockContainer}>
                  <div className={S.desk__4BlockMounth}>мая</div>

                  <div className={S.desk__4BlockTxt}> Ментальная Арифметика</div>
                </div>
                <div className={S.desk__4BlockCount}>16</div>
                <div className={S.desk__4BlockTime}>09:00-09:45</div>
                <img className={S.desk__4BlockImg} src="../../img/Group (1) — копия.png" alt="" />
                <div className={S.desk__4BlockName}>Мин Елена</div>
                <div className={S.desk__4BlockBtns}>
                  <button className={S.desk__4BlockBtnsBtn}>Button</button>
                  <button className={S.desk__4BlockBtnsBtn2}>Button</button>
                </div>
              </div>

              <button className={S.desk__4Button}>Button</button>
            </div>
          </div>

          <div className={S.desk__5}>
            <div className={S.desk__5Close}>
              <img src="../../img/clos.png" alt="" />
            </div>
            <div className={S.desk__5Box}>
              <div className={S.desk__5Form}>
                <a className={S.desk__5FormTxt} href="#">
                  Смена пользователя
                </a>
                <div className={S.desk__5FormUser}>
                  <img className={S.desk__5FormUserImg} src="../../img/avatar.png" alt="" />

                  <div>
                    <div className={S.desk__5FormUserBox1}>Михаил</div>
                    <div className={S.desk__5FormUserBox2}>Это вы</div>
                  </div>
                </div>

                <div className={S.desk__5FormUser}>
                  <img src="../../img/2avatar.png" alt="" />

                  <div className={S.desk__5FormUserBox1}>
                    <div className={S.desk__5FormUserBox1}>Анна</div>
                  </div>
                </div>
              </div>

              <div className={S.desk__5FormFooter}>
                <button className={S.desk__5FormFooterBtn}>Выход</button>
                <button className={S.desk__5FormFooterBtn2}>
                  <img src="../../img/Interface, Essential_exit.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <aside className={S.lPanel}>
          <div className={S.lPanel__logo}>
            <img src="../../img/Full_Logo_1_.png" alt="" />
          </div>
          <div className={S.lPanel__menu}>
            <div className={S.lPanel__menu2}>
              <img src="../../img/left menu icon.png" alt="" />
              <div className={S.lPanel__menu2Feature} role="button" onClick={main}>
                Главная
              </div>
            </div>
            <div className={S.lPanel__menu1}>
              <img src="../../img/left menu icon.png" alt="" />
              <div className={S.lPanel__menu3Feature} role="button" onClick={timeTable}>
                Расписание
              </div>
            </div>
            <div className={S.lPanel__menu1}>
              <img src="../../img//Money_Wallet.png" alt="" />
              <a className={S.lPanel__menu3Feature}>Оплата</a>
            </div>
            <div className={S.lPanel__menu1}>
              <img src="../../img/left menu icon.png" alt="" />
              <a className={S.lPanel__menu3Feature}>Достижения</a>
            </div>
            <div className={S.lPanel__menu1}>
              <img src="../../img/left menu icon.png" alt="" />
              <a className={S.lPanel__menu3Feature}>Тренажеры</a>
            </div>
            <div className={S.lPanel__menu1}>
              <img src="../../img/left menu icon.png" alt="" />
              <a className={S.lPanel__menu3Feature}>Библиотека</a>
            </div>
            <div className={S.lPanel__menu1}>
              <img src="../../img/left menu icon.png" alt="" />
              <a className={S.lPanel__menu3Feature}>Проверка связи</a>
            </div>
            <div className={S.lPanel__menu1}>
              <img src="../../img/left menu icon.png" alt="" />
              <a className={S.lPanel__menu3Feature}>Настройки</a>
            </div>
            <div className={S.lPanel__menu1}>
              <img src="../../img/left menu icon.png" alt="" />
              <a className={S.lPanel__menu3Feature}>Вопросы</a>
            </div>

            <div className={S.lPanel__menuImg}>
              <img className={S.lPanel__menuImg1} src="../../img/2Referral.png" alt="" />
            </div>
          </div>
        </aside>
      </section>
    </>
  )
}

export default Profile
