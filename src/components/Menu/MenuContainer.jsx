import {connect} from "react-redux"
import Menu from "./Menu"


let mapStateToProps = (state) => {
  return {
    id: state.auth.id
  }
}


export default connect(mapStateToProps, {})(Menu)