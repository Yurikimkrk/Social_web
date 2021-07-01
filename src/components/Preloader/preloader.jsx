import s from "../Users/Users.module.css"
import spinner from "../../img/spinner.svg"


let Preloader = () => {
  return <div className={s.spinner}><img src={spinner} alt=""/></div>
}

export default Preloader