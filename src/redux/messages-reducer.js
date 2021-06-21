let initialState = {
  talkers: [
    {name: 'Дмитрий', id: 1},
    {name: 'Артем', id: 2},
    {name: 'Наталья', id: 3},
    {name: 'Абракадабра', id: 4},
    {name: 'Иван', id: 5},
    {name: 'Семён', id: 6},
    {name: 'Олег', id: 7},
    {name: 'Клава', id: 8},
    {name: 'Илья', id: 9},
    {name: 'Константин', id: 10}
  ],
  texts: [
    {id: 1, text: "Привет, как дела"},
    {id: 2, text: "Всё отлично"},
    {id: 3, text: "У меня тоже всё хорошо"}
  ],
  messageText: ''
}

const messagesReducer = (state = initialState, action) => {

  switch (action.type) {
    case "SEND-MESSAGE":
      if (state.messageText) {
        let newMessage = {
          id: state.texts.length + 1,
          text: state.messageText,
        }
        return {
          ...state,
          messageText: "",
          texts: [...state.texts, newMessage]
        }
      } else return state
    case "UPDATE-MESSAGE-TEXT":
      return {
        ...state,
        messageText: action.newMessageText
      }
    default:
      return state
  }
}

export const sendMessageAC = () => ({type: 'SEND-MESSAGE'})
export const updateMessageTextAC = (text) => ({type: 'UPDATE-MESSAGE-TEXT', newMessageText: text})

export default messagesReducer