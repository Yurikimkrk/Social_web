let initialState = {
  posts: [
    {
      id: 1, text: 'Какая же красивая тут природа, просто диву даешься. Кто не лайкает, тот не любит природу. Фу' +
        ' такими быть', likes: 28, comments: 6
    },
    {id: 2, text: 'Это пост номер 2, живи с этим', likes: 9, comments: 2},
  ],
  postTexts: ''
}

const postsReducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD-POST":
      if (state.postTexts) {
        let newPost = {
          id: state.posts.length + 1,
          text: state.postTexts,
          likes: 0,
          comments: 0
        }
        return {
          ...state,
          postTexts: "",
          posts: [...state.posts, newPost]
        }
      } else return state
    case "UPDATE-POST-TEXT":
      return {
        ...state,
        postTexts: action.newText
      }
    default:
      return state
  }
}

export const addPostAC = () => ({type: 'ADD-POST'})
export const updatePostTextAC = (text) => ({type: 'UPDATE-POST-TEXT', newText: text})

export default postsReducer
