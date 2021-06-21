import postsReducer from "./posts-reducer";
import messagesReducer from "./messages-reducer";

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

  dispatch(action) {
    this._state.posts = postsReducer(this._state.posts, action)
    this._state.messages = messagesReducer(this._state.messages, action)
    this._renderTree(this._state)
  }
}

window.store = store

export default store



