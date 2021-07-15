import s from "./Status.module.css"
import {useEffect, useState} from "react"


const StatusHooks = (props) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect( () => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }



  return (!editMode ?
      <div className={s.status}>
        <div onDoubleClick={activateEditMode}>{props.status || '---'}</div>
      </div> :
      <div className={s.status__input}>
        <input  onChange={onStatusChange} onBlur={deactivateEditMode}
                value={status} autoFocus={true}/>
      </div>
  )
}

export default StatusHooks
