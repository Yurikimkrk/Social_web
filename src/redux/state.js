let store = {
  _state: {
    messages: {
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
    },
    posts: {
      posts: [
        {
          id: 1, text: 'Какая же красивая тут природа, просто диву даешься. Кто не лайкает, тот не любит природу. Фу' +
            ' такими быть', likes: 28, comments: 6
        },
        {id: 2, text: 'Это пост номер 2, живи с этим', likes: 9, comments: 2},
        {id: 3, text: 'Lorem Ipsum', likes: 11, comments: 1}
      ],
      postTexts: ''
    }
  },

  _renderTree() {
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._renderTree = observer
  },

  _addPost() {
    let newPost = {
      id: this._state.posts.posts.length + 1,
      text: this._state.posts.postTexts,
      likes: 0,
      comments: 0
    }
    this._state.posts.posts.push(newPost)
    this._state.posts.postTexts = ''
    this._renderTree(this._state)
  },
  sendMessage() {
    let newMessage = {
      id: this._state.messages.messageText.length + 1,
      text: this._state.messages.messageText,
    }
    this._state.messages.texts.push(newMessage)
    this._state.messages.messageText = ''
    this._renderTree(this._state)
  },
  _updatePostText(newText) {
    this._state.posts.postTexts = newText
    this._renderTree(this._state)
  },
  _updateMessageText(newMessageText) {
    this._state.messages.messageText = newMessageText
    this._renderTree(this._state)
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      this._addPost()
    } else if (action.type === "SEND-MESSAGE") {
      this.sendMessage()
    } else if (action.type === "UPDATE-POST-TEXT") {
      this._updatePostText(action.newText)
    } else if (action.type === "UPDATE-MESSAGE-TEXT") {
      this._updateMessageText(action.newMessageText)
    }
  }
}


export const addPostAC = () => ({type: 'ADD-POST'})

export const sendMessageAC = () => ({type: 'SEND-MESSAGE'})

export const updatePostTextAC = (text) => ({type: 'UPDATE-POST-TEXT', newText: text})

export const updateMessageTextAC = (text) => ({type: 'UPDATE-MESSAGE-TEXT', newMessageText: text})

window.store = store

export default store



