import {getProfileAPI, getStatusAPI, updateStatusAPI} from "../API/api"

let initialState = {
  posts: [
    {
      id: 1, text: 'Какая же красивая тут природа, просто диву даешься. Кто не лайкает, тот не любит природу. Фу' +
        ' такими быть', likes: 28, comments: 6
    },
    {id: 2, text: 'Это пост номер 2, живи с этим', likes: 9, comments: 2},
  ],
  postTexts: '',
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {

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
    case "SET-USER-PROFILE":
      return {
        ...state,
        profile: action.profile
      }
    case "SET-STATUS":
      return {
        ...state,
        status: action.status
      }
    default:
      return state
  }
}

export const addNewPost = () => ({type: 'ADD-POST'})
export const updatePostText = (text) => ({type: 'UPDATE-POST-TEXT', newText: text})
export const setUserProfile = (profile) => ({type: 'SET-USER-PROFILE', profile})
export const setStatus = (status) => ({type: 'SET-STATUS', status})
export const getProfile = (userId) => (dispatch) => {
  getProfileAPI(userId).then(response => (dispatch(setUserProfile(response))))
}
export const getStatus = (userId) => (dispatch) => {
  getStatusAPI(userId).then(response => (dispatch(setStatus(response))))
}
export const updateStatus = (status) => (dispatch) => {
  updateStatusAPI(status).then(response => {
    if (response.resultCode === 0) {
      dispatch(setStatus(status))
    }
  })
}

export default profileReducer
