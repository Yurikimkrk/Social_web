import {Field, reduxForm} from "redux-form"
import s from "./Login.module.css"
import {connect} from "react-redux"
import {login} from "../../redux/auth-reducer"
import {required} from "../../validators/validators"
import {Redirect} from "react-router-dom"

const LoginForm = (props) => {
  return (
    <form className={s.login} onSubmit={props.handleSubmit}>
      <h1>Войти</h1>
      <div>
        <Field className={s.log} placeholder='Email' validate={required} name='email' component='input'/>
      </div>
      <div>
        <Field className={s.pas} placeholder='Password' validate={required} name='password' type='password' component='input'/>
      </div>
      <div className={s.rem}>
        <Field type='checkbox' name='rememberMe' component='input'/>
        <span>Запомнить</span>
      </div>
      <div>
        <button>Отправить</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }
  if (props.isAuth) {
    return <Redirect to='/profile' />
  }
  return <div>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)