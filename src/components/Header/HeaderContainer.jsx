import {connect} from "react-redux"
import {Component} from "react"
import Header from "./Header"
import {getAuthUserData, logout} from "../../redux/auth-reducer"


class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getAuthUserData()
  }

  render() {
    return <Header {...this.props}/>
  }
}


let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    user: state.auth.user
  }
}


export default connect(mapStateToProps,
  {getAuthUserData, logout})(HeaderContainer)