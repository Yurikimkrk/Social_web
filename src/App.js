import Header from "./components/Header/Header"
import Profile from "./components/Profile/Profile"
import Menu from "./components/Menu/Menu"
import Footer from "./components/Footer/Footer"
import {Route} from "react-router-dom"
import PostsContainer from "./components/Posts/PostsContainer"
import MessagesContainer from "./components/Messages/MessagesContainer"
import UsersContainer from "./components/Users/UsersContainer"

const App = (props) => {
  return (
    <div className={'wrapper'}>
      <Header/>
      <div className={'container'}>
        <Menu/>
        <div className={'content_wrapper'}>
          <Route path='/profile' render={() => <Profile/>}/>
          <Route path='/posts' render={() => <PostsContainer/>}/>
          <Route path='/messages' render={() => <MessagesContainer/>}/>
          <Route path='/users' render={() => <UsersContainer store={props.store}/>}/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
