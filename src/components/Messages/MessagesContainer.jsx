import Messages from "./Messages"
import {sendMessage, onMessageChange} from "../../redux/messages-reducer"
import {connect} from "react-redux"
import {compose} from "redux"
import {withAuthRedirect} from "../../hoc/withAuthRedirect"


let mapStateToProps = (state) => {
  return {
    messages: state.messagesPage
  }
}


export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {onMessageChange, sendMessage})
)(Messages)