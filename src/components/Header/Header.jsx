import s from "./Header.module.css"
import logo from "../../img/logo.svg"
import def_ava from "../../img/default_small.jpeg"
import Preloader from "../Preloader/preloader"


const Header = (props) => {
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
          {/*Social web*/}
        </div>
        {(props.isAuth) ? <div className={s.header__user}>
          <div className={s.header__username}>
            {props.login}
          </div>
          <div className={s.header__useravatar} onClick={props.logout}>
            {(props.user)? <img src={props.user.photos.small ?
              props.user.photos.small : def_ava} alt=""/> :<Preloader/>}
          </div>
        </div> : <button>Вход</button>}
      </div>
    </div>
  )
}

export default Header