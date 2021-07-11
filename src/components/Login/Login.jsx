import {Field, reduxForm} from "redux-form"
import s from "./Login.module.css"
import {connect} from "react-redux"
import {login} from "../../redux/auth-reducer"
import {required} from "../../validators/validators"
import {Redirect} from "react-router-dom"
import {Input} from "../FormControls/FormControls"


const LoginForm = (props) => {
  debugger
  return (
    <form className={s.login} onSubmit={props.handleSubmit}>
      <h1>Войти</h1>
      <div>
        <Field className={s.log} placeholder='Email' validate={required} name='email' component={Input}/>
      </div>
      <div>
        <Field className={s.pas} placeholder='Password' validate={required} name='password' type='password' component={Input}/>
      </div>
      <div className={s.rem}>
        <Field type='checkbox' name='rememberMe' component='input'/>
        <span>Запомнить</span>
      </div>
      <div>
        { props.error && <span className={s.error}>{props.error}</span>}
      </div>
      <div>
        <button>Отправить</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  debugger
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }
  return <div>{props.isAuth? <Redirect to={'/profile/' + props.id}/>: <LoginReduxForm onSubmit={onSubmit}/>}</div>
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  id: state.auth.id
})

export default connect(mapStateToProps, {login})(Login)