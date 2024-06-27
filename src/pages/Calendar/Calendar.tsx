import React from "react"
import S from "./Calendar.module.css"
import { Link } from "react-router-dom"

function Calendar() {
  return (
    <>
      <section className={S.container}>
        <header className={S.header}>
          <div className={S.header__info}>
            <div className={S.header__block}>
              <img className={S.header__img} src="../../img/chat.png" />
              <img className={S.header__ava} src="../../img/user.png" />
            </div>
          </div>
        </header>

        <div className={S.content}>
          <section className={S.selectTime}>
            <select className={S.selectTime__select} id="">
              <option value="">1</option>
              <option value="">2</option>
            </select>

            <button className={S.selectTime__button}>Изменить расписание</button>
          </section>

          <section className={S.table}>
            <div className={S.table__date}>
              <div className={S.table__dateLeft}>
                <img src="../../img/left.png" alt="" />
              </div>
              <div className={S.table__dateNow}>Март 2024</div>
              <div className={S.table__dateRight}>
                <img src="../../img/right.png" alt="" />
              </div>

              <button className={S.table__dateBtn}>Сегодня</button>
              <div className={S.table__dateImg}>
                <img src="../../img/vop.png" alt="" />
              </div>
            </div>

            <div className={S.grid__days}>
              <div className={S.grid__daysCount}>пн</div>
              <div className={S.grid__daysCount}>вт</div>
              <div className={S.grid__daysCount}>ср</div>
              <div className={S.grid__daysCount}>чт</div>
              <div className={S.grid__daysCount}>пт</div>
              <div className={S.grid__daysCount}>сб</div>
              <div className={S.grid__daysCount}>вс</div>
            </div>

            <div className={S.grid__days}>
              <div className={S.grid__win}>26</div>
              <div className={S.grid__win}>
                27
                <span className={S.grid__winContainer}>
                  <div className={S.grid__win27}>Ментальная арифметика</div>
                  <div className={S.grid__win27}>Ментальная арифметика</div>
                </span>
              </div>
              <div className={S.grid__win}>
                28
                <span className={S.grid__winContainer}>
                  <div className={S.grid__win28}>Ментальная арифметика</div>
                  <div className={S.grid__win28}>Ментальная арифметика</div>
                </span>
              </div>
              <div className={S.grid__win}>
                30
                <span className={S.grid__winContainer}>
                  <div className={S.grid__win30}>
                    <img className={S.grid__winContainerImg} src="../../img/Group (1).png" alt="" />
                    Ментальная арифметика
                  </div>
                  <div className={S.grid__win30}>
                    <img className={S.grid__winContainerImg} src="../../img/Group (1).png" alt="" />
                    Ментальная арифметика
                  </div>
                </span>
              </div>
              <div className={S.grid__win}>
                1 марта
                <span className={S.grid__winContainer}>
                  <div className={S.grid__win1}>Ментальная арифметика</div>
                  <div className={S.grid__winx}>Ментальная арифметика</div>
                </span>
              </div>
              <div className={S.grid__win2}>
                2
                <span className={S.grid__winContainer}>
                  <div className={S.grid__win2x}>
                    <img className={S.grid__winContainerImg} src="../../img/Group (1).png" alt="" />
                  </div>
                  <div className={S.grid__win2}>
                    <img className={S.grid__winContainerImg} src="../../img/Group (1).png" alt="" />
                    Ментальная арифметика
                  </div>
                </span>
              </div>
              <div className={S.grid__win}>
                3
                <span className={S.grid__winContainer}>
                  <div className={S.grid__win3x}></div>
                  <div className={S.grid__win3}>Ментальная арифметика</div>
                </span>
              </div>
            </div>

            <div className={S.grid}>
              <div className={S.grid__win}>
                4
                <span className={S.grid__winContainer}>
                  <div className={S.grid__win4}>
                    <img className={S.grid__winContainerImg} src="../../img/Group (1).png" alt="" />
                    Ментальная арифметика
                  </div>
                </span>
              </div>
              <div className={S.grid__win}>5</div>
              <div className={S.grid__win}>
                6
                <span className={S.grid__winContainer}>
                  <div className={S.grid__win4}>
                    <img className={S.grid__winContainerImg} src="../../img/Group (1).png" alt="" />
                    Ментальная арифметика
                  </div>
                </span>
              </div>
              <div className={S.grid__win}>7</div>
              <div className={S.grid__win}>
                8
                <span className={S.grid__winContainer}>
                  <div className={S.grid__win4}>
                    <img className={S.grid__winContainerImg} src="../../img/Group (1).png" alt="" />
                    Ментальная арифметика
                  </div>
                </span>
              </div>
              <div className={S.grid__win2}>9</div>
              <div className={S.grid__win2}>10</div>
            </div>

            <div className={S.grid}>
              <div className={S.grid__win}>11</div>
              <div className={S.grid__win}>12</div>
              <div className={S.grid__win}>13</div>
              <div className={S.grid__win}>
                14
                <span className={S.grid__winContainer}>
                  <div className={S.grid__win4}>
                    <img className={S.grid__winContainerImg} src="../../img/Group (1).png" alt="" />
                    Ментальная арифметика
                  </div>
                </span>
              </div>
              <div className={S.grid__win}>15</div>
              <div className={S.grid__win2}>
                16
                <span className={S.grid__win2Container}>
                  <div className={S.grid__win4}>
                    <img className={S.grid__winContainerImg} src="../../img/Group (1).png" alt="" />
                    Ментальная арифметика
                  </div>
                </span>
              </div>
              <div className={S.grid__win2}>17</div>
            </div>

            <div className={S.grid}>
              <div className={S.grid__win}>
                18
                <span className={S.grid__winContainer}>
                  <div className={S.grid__win2}>
                    <img className={S.grid__winContainerImg} src="../../img/Group (1).png" alt="" />
                  </div>
                  <div className={S.grid__win2}>
                    <img className={S.grid__winContainerImg} src="../../img/Group (1).png" alt="" />
                    Ментальная арифметика
                  </div>
                </span>
              </div>
              <div className={S.grid__win}>19</div>
              <div className={S.grid__win}>20</div>
              <div className={S.grid__win}>21</div>
              <div className={S.grid__win}>22</div>
              <div className={S.grid__win2}>
                23
                <span className={S.grid__win2Container}>
                  <div className={S.grid__win2and4}>
                    <img className={S.grid__winContainerImg} src="../../img/Group (1).png" alt="" />
                    Ментальная арифметика
                  </div>
                </span>
              </div>
              <div className={S.grid__win2}>24</div>
            </div>

            <div className={S.grid}>
              <div className={S.grid__win}>25</div>
              <div className={S.grid__win}>26</div>
              <div className={S.grid__win}>27</div>
              <div className={S.grid__win}>28</div>
              <div className={S.grid__win}>29</div>
              <div className={S.grid__win2}>30</div>
              <div className={S.grid__win2}>
                31
                <span className={S.grid__winContainer}>
                  <div className={S.grid__win2}>
                    <img className={S.grid__winContainerImg} src="../../img/Group (1).png" alt="" />
                  </div>
                  <div className={S.grid__win2}>
                    <img className={S.grid__winContainerImg} src="../../img/Group (1).png" alt="" />
                    Ментальная арифметика
                  </div>
                </span>
              </div>
            </div>
          </section>
        </div>

        <aside className={S.lPanel}>
          <div className={S.lPanel__logo}>
            <img src="../../img/Full_Logo_1_.png" alt="" />
          </div>
          <div className={S.lPanel__menu}>
            <div className={S.lPanel__menu1}>
              <img src="../../img/left menu icon.png" alt="" />

              <Link className={S.lPanel__menu2Feature} to="/Profile">
                Главная
              </Link>
            </div>
            <div className={S.lPanel__menu2}>
              <img src="../../img/left menu icon.png" alt="" />

              <Link className={S.lPanel__menu2Feature} to="/Calendar">
                Расписание
              </Link>
            </div>
            <div className={S.lPanel__menu1}>
              <img src="../../img//Money_Wallet.png" alt="" />
            </div>
            <div className={S.lPanel__menu1}>
              <img src="../../img/left menu icon.png" alt="" />
            </div>
            <div className={S.lPanel__menu1}>
              <img src="../../img/left menu icon.png" alt="" />
            </div>
            <div className={S.lPanel__menu1}>
              <img src="../../img/left menu icon.png" alt="" />
            </div>
            <div className={S.lPanel__menu1}>
              <img src="../../img/left menu icon.png" alt="" />
            </div>
            <div className={S.lPanel__menu1}>
              <img src="../../img/left menu icon.png" alt="" />
            </div>
            <div className={S.lPanel__menu1}>
              <img src="../../img/left menu icon.png" alt="" />
            </div>

            <div className={S.lPanel__menuImg}>
              <img className={S.lPanel__menuImg1} src="../../img/Referral.png" alt="" />
            </div>
          </div>
        </aside>
      </section>
    </>
  )
}

export default Calendar
