import s from "./Messages.module.css"
import Talkers from "./Talkers/Talkers"
import Texts from "./Texts/Texts";


const Messages = (props) => {
  return (
    <div className={s.messages}>
      <Talkers talkers={props.messages.talkers}/>
      <Texts texts={props.messages.texts}
             messageText={props.messages.messageText}
             dispatch={props.dispatch}/>
    </div>
  )
}

export default Messages