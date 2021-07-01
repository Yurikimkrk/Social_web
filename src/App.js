import Footer from "./components/Footer/Footer"
import {Route} from "react-router-dom"
import MessagesContainer from "./components/Messages/MessagesContainer"
import UsersContainer from "./components/Users/UsersContainer"
import MyProfileContainer from "./components/Profile/MyProfileContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import Login from "./components/Login/Login";
import MenuContainer from "./components/Menu/MenuContainer"

const App = (props) => {
  return (
    <div className={'wrapper'}>
      <HeaderContainer/>
      <div className={'container'}>
        <MenuContainer/>
        <div className={'content_wrapper'}>
          <Route path='/profile/:userId?' render={() => <MyProfileContainer/>}/>
          {/*<Route path='/posts' render={() => <PostsContainer/>}/>*/}
          <Route path='/messages' render={() => <MessagesContainer/>}/>
          <Route path='/users' render={() => <UsersContainer store={props.store}/>}/>
          <Route path='/login' render={() => <Login/>}/>

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
