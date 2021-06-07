import Header from "./components/Header/Header"
import Profile from "./components/Profile/Profile";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className={'wrapper'}>
      <Header/>
      <div className={'container'}>
        <Menu/>
        <div className={'content_wrapper'}>
          <Profile/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
