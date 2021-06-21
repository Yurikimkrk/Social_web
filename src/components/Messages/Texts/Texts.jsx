import s from "./Texts.module.css"
import cat from "../../../img/ava2.jpg"
import {createRef} from "react"


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

const Texts = (props) => {
  let textsElements = props.texts.map(t => <TextsItem text={t.text} key={t.id}/>)
  let newElement = createRef()

  let onSendMessage = () => {
    props.sendMessage()
  }

  let onMessageChange = () => {
    props.onMessageChange(newElement.current.value)
  }


  return (
    <div className={s.texts__block}>
      <div className={s.texts__el}>
        {textsElements}
      </div>
      <textarea className={s.texts__input} ref={newElement} rows='2'
                placeholder='Написать сообщение' value={props.messageText}
                onChange={onMessageChange}
      >
      </textarea>
      <button onClick={onSendMessage}>Отправить</button>

    </div>

  )
}

export default Texts