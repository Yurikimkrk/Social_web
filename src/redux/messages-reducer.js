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
  ]
}

const messagesReducer = (state = initialState, action) => {

  switch (action.type) {
    case "SEND-MESSAGE":
      let newMessage = {
        id: state.texts.length + 1,
        text: action.messageInput
      }
      return {
        ...state,
        texts: [...state.texts, newMessage]
      }
    default:
      return state
  }
}

export const sendMessage = (messageInput) => ({type: 'SEND-MESSAGE', messageInput})

export default messagesReducer