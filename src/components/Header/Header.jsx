import s from "./Header.module.css"
import logo from "../../img/logo.svg"
import total from "../../img/total.jpg"

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.header__row}>
        <div className={s.header__about}>
          <div className={s.header__logo}>
            <img src={logo} alt=""/>
          </div>
          <div className={s.header__name}>
            Sputnik
          </div>
        </div>
        <div className={s.header__name_info}>
          Social web
        </div>
        <div className={s.header__user}>
          <div className={s.header__username}>
            Total
          </div>
          <div className={s.header__useravatar}>
            <img src={total} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header