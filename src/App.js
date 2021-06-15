import Header from "./components/Header/Header"
import Profile from "./components/Profile/Profile"
import Menu from "./components/Menu/Menu"
import Footer from "./components/Footer/Footer"
import Posts from "./components/Posts/Posts"
import Messages from "./components/Messages/Messages"
import {Route, BrowserRouter} from "react-router-dom"

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={'wrapper'}>
        <Header/>
        <div className={'container'}>
          <Menu/>
          <div className={'content_wrapper'}>
            <Route path='/profile' component={Profile}/>
            <Route path='/posts'
                   render={() => <Posts posts={props.state.posts}
                                        dispatch={props.dispatch}/>}/>
            <Route path='/messages'
                   render={() => <Messages messages={props.state.messages}
                                           dispatch={props.dispatch}/>}/>
          </div>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
