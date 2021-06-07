import s from "./Menu.module.css"


const Menu = () => {
  return (
    <div>
      <div className={s.menu}>
        <div>Мой профиль</div>
        <div>Сообщения</div>
        <div>Новости</div>
        <div>Фото</div>
        <div>Друзья</div>
        <div>Настройки</div>
      </div>
    </div>
  )
}

export default Menu