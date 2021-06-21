import Messages from "./Messages"
import {sendMessageAC, updateMessageTextAC} from "../../redux/messages-reducer"
import {connect} from "react-redux"


let mapStateToProps = (state) => {
  return {
    messages: state.messagesPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange: (text) => {
      dispatch(updateMessageTextAC(text))
    },
    sendMessage: () => {
      dispatch(sendMessageAC())
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer