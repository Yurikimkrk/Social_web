import s from "./Talkers.module.css"
import cat from "../../../img/ava1.jpg"
import {NavLink} from "react-router-dom"

const TalkersItem = (props) => {
  return (
    <NavLink to={`/dialogs/${props.id}`}>
      <div className={s.talkers__item}>
        <img src={cat} alt=""/>
        <div>
          {props.name}
        </div>
      </div>
    </NavLink>
  )
}

const Talkers = (props) => {
  let talkersElements = props.talkers.map(t => <TalkersItem name={t.name} id={t.id} key={t.id}/>)
  return (
    <div className={s.talkers}>
      {talkersElements}
    </div>
  )
}

export default Talkers