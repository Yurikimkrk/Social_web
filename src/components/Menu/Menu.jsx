import s from "./Menu.module.css"
import {NavLink} from "react-router-dom";


const Menu = () => {
  return (
    <div className={s.menu__wrapper}>
      <div className={s.menu}>
        <div><NavLink to="/profile" activeClassName={s.active}>Мой профиль</NavLink></div>
        <div><NavLink to="/messages" activeClassName={s.active}>Сообщения</NavLink></div>
        <div><NavLink to="/posts" activeClassName={s.active}>Новости</NavLink></div>
        <div><NavLink to="/photo" activeClassName={s.active}>Фото</NavLink></div>
        <div><NavLink to="/friends" activeClassName={s.active}>Друзья</NavLink></div>
        <div><NavLink to="/settings" activeClassName={s.active}>Настройки</NavLink></div>
      </div>
    </div>
  )
}

export default Menu