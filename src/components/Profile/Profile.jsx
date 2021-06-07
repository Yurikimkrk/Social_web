import s from "./Profile.module.css"
import total from "../../img/total.jpg"


const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.profile__photo}>
        <div className={s.profile__img_box}>
          <img className={s.profile__img} src={total} alt=""/>
        </div>
        <button className={s.profile__editbutton}>
          Редактировать профиль
        </button>
      </div>
      <div className={s.profile__info}>
        <div className={s.profile__fullname_block}>
          <div className={s.profile__fullname}>
            Юрий Ким
          </div>
          <div className={s.profile__status}>
            online
          </div>
        </div>
        <div className={s.profile__userdata_block}>
          <div className={s.profile__userdata_title}>
            Подробная информация
          </div>
          <div className={s.profile__userdata}>
            <div className={s.profile__userdata_key}>
              <div>День рождения:</div>
              <div>Страна:</div>
              <div>Город:</div>
              <div>Семейный статус:</div>
              <div>Языки:</div>
              <div>Профессия:</div>
            </div>
            <div className={s.profile__userdata_value}>
              <div>30.10.1984</div>
              <div>Россия</div>
              <div>Красноярск</div>
              <div>женат</div>
              <div>Русский, Английский</div>
              <div>Римский легионер, программист</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile