import {Route, withRouter} from "react-router-dom"
import UsersContainer from "./components/Users/UsersContainer"
import MyProfileContainer from "./components/Profile/MyProfileContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import Login from "./components/Login/Login";
import MenuContainer from "./components/Menu/MenuContainer"
import React, {Component} from "react"
import {compose} from "redux"
import {connect} from "react-redux"
import {initializeApp} from "./redux/app-reducer"
import Preloader from "./components/Preloader/preloader"
import {withSuspense} from "./hoc/withSuspense"

const MessagesContainer = React.lazy(() => import("./components/Messages/MessagesContainer"))

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    return <div>
      {!this.props.initialized ? <Preloader/> :
        <div className={'wrapper'}>
          <HeaderContainer/>
          <div className={'container'}>
            <MenuContainer/>
            <div className={'content_wrapper'}>
              <Route path='/profile/:userId?' render={() => <MyProfileContainer/>}/>
              {/*<Route path='/posts' render={() => <PostsContainer/>}/>*/}
              <Route path='/messages' render={withSuspense(MessagesContainer)}/>
              <Route path='/users' render={() => <UsersContainer store={this.props.store}/>}/>
              <Route path='/login' render={() => <Login/>}/>

            </div>
          </div>
          {/*<Footer/>*/}
        </div>
      }</div>
  }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App)
