import s from "./Menu.module.css"
import {NavLink} from "react-router-dom"


const Menu = (props) => {
  return (
    <div className={s.menu__wrapper}>
      <div className={s.menu}>
        <div><NavLink to={"/profile/" + props.id} activeClassName={s.active}>Мой профиль</NavLink></div>
        <div><NavLink to="/messages" activeClassName={s.active}>Сообщения</NavLink></div>
        <div><NavLink to="/users" activeClassName={s.active}>Участники</NavLink></div>
        <div><NavLink to="/posts" activeClassName={s.active}>Новости</NavLink></div>
        <div><NavLink to="/friends" activeClassName={s.active}>Мои друзья</NavLink></div>
        <div><NavLink to="/photo" activeClassName={s.active}>Фото</NavLink></div>
        <div><NavLink to="/settings" activeClassName={s.active}>Настройки</NavLink></div>
      </div>
    </div>
  )
}

export default Menu