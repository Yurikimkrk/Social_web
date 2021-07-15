import s from "./Profile.module.css"
import friend from "../../img/friend.jpg"
import {Field, reduxForm} from "redux-form"
import {Input} from "../FormControls/FormControls"
import {useState} from "react"

const ProfileDataForm = ({profile, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className={s.profile__userdata}>
      <button>Сохранить</button>
        <div className={s.profile__userdata_unit}>
          <div className={s.profile__userdata_key}>Обо мне:</div>
          <div className={s.profile__userdata_value}>
            <Field name='aboutMe' component={Input}/>
          </div>
        </div>
        <div className={s.profile__userdata_unit}>
          <div className={s.profile__userdata_key}>github:</div>
          <div className={s.profile__userdata_value}>
            <Field name='contacts.github' component={Input}/>
          </div>
        </div>
        <div className={s.profile__userdata_unit}>
          <div className={s.profile__userdata_key}>facebook:</div>
          <div className={s.profile__userdata_value}>
            <Field name='contacts.facebook' component={Input}/>
          </div>
        </div>
        <div className={s.profile__userdata_unit}>
          <div className={s.profile__userdata_key}>vk:</div>
          <div className={s.profile__userdata_value}>
            <Field name='contacts.vk' component={Input}/>
          </div>
        </div>
        <div className={s.profile__userdata_unit}>
          <div className={s.profile__userdata_key}>website:</div>
          <div className={s.profile__userdata_value}>
            <Field name='contacts.website' component={Input}/>
          </div>
        </div>
    </form>
  )
}

const ProfileDataReduxForm = reduxForm({form: 'editDataForm'})(ProfileDataForm)

const ProfileData = ({profile, activateEditMode, isOwner}) => {
  return (
      <div className={s.profile__userdata}>
        {isOwner? <button onClick={activateEditMode}>Редактировать</button> :""}
        <div className={s.profile__userdata_unit}>
          <div className={s.profile__userdata_key}>Обо мне:</div>
          <div className={s.profile__userdata_value}>
            {profile.aboutMe ? profile.aboutMe : '---'}
          </div>
        </div>
        <div className={s.profile__userdata_unit}>
          <div className={s.profile__userdata_key}>github:</div>
          <div className={s.profile__userdata_value}>
            {profile.contacts.github ? profile.contacts.github : '---'}
          </div>
        </div>
        <div className={s.profile__userdata_unit}>
          <div className={s.profile__userdata_key}>facebook:</div>
          <div className={s.profile__userdata_value}>
            {profile.contacts.facebook ? profile.contacts.facebook : '---'}
          </div>
        </div>
        <div className={s.profile__userdata_unit}>
          <div className={s.profile__userdata_key}>vk:</div>
          <div className={s.profile__userdata_value}>
            {profile.contacts.vk ? profile.contacts.vk : '---'}
          </div>
        </div>
        <div className={s.profile__userdata_unit}>
          <div className={s.profile__userdata_key}>website:</div>
          {profile.contacts.website ?
            <a href={profile.contacts.website} target="_blank" className={s.profile__userdata_value}>{profile.contacts.website}</a>:
            <div className={s.profile__userdata_value}>---</div>}
        </div>
      </div>
  )
}

const Profile = ({profile, isOwner, savePhoto, saveProfileData}) => {
  let [editMode, setEditMode] = useState(false)

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const activateEditMode = () => {
    setEditMode(true)
  }
  const onSubmit = (formData) => {
    saveProfileData(formData)
    setEditMode(false)
  }

  return (
    <div className={s.profile}>
      <div className={s.profile__photo}>
        <div className={s.profile__img_box}>
          <img className={s.profile__img}
               src={profile.photos.large ? profile.photos.large : friend} alt=""/>
        </div>
        <div>
          <div className={s.upload__photo}>
            <label>
              <input type="file" name="file"
                     className={s.upload__input} onChange={onMainPhotoSelected}/>
              <span>{isOwner ? 'Сменить аватарку' : 'Пользователь'}</span>
            </label>
          </div>
      </div>
    </div>
  <div className={s.profile__info}>
    <div className={s.profile__fullname_block}>
      <div className={s.profile__fullname}>
        {profile.fullName}
      </div>
      <div className={s.profile__status}>
        online
      </div>
    </div>
    <div className={s.profile__userdata_block}>
      <div className={s.profile__userdata_title}>
        Подробная информация
      </div>
      {editMode ? <ProfileDataReduxForm initialValues ={profile} onSubmit={onSubmit} profile={profile}/>
        :<ProfileData profile={profile} activateEditMode={activateEditMode} isOwner={isOwner}/>}
    </div>
  </div>
</div>
)
}

export default Profile