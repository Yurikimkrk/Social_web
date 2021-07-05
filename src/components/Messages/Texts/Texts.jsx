import s from "./Texts.module.css"
import cat from "../../../img/ava2.jpg"
import {Field, reduxForm} from "redux-form"


const TextsItem = (props) => {
  return (
    <div className={s.texts__item}>
      <img src={cat} alt=""/>
      <div>
        {props.text}
      </div>
    </div>
  )
}

const MessageInputForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <Field className={s.texts__input} rows='2'
               placeholder='Написать сообщение'  name='messageInput'
               component='textarea'/>
      <button>Отправить</button>
    </form>
  )
}

const MessageInputReduxForm = reduxForm({form: 'messageInput'})(MessageInputForm)

const Texts = (props) => {
  let textsElements = props.texts.map(t => <TextsItem text={t.text} key={t.id}/>)

  let addNewMessage = (values) => {
    props.sendMessage(values.messageInput)
  }


  return (
    <div className={s.texts__block}>
      <div className={s.texts__el}>
        {textsElements}
      </div>
      <MessageInputReduxForm onSubmit={addNewMessage}/>
    </div>

  )
}

export default Texts