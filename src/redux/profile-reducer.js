import {getProfileAPI, getStatusAPI, updateStatusAPI,
  savePhotoAPI, saveProfileDataAPI} from "../API/api"

let initialState = {
  posts: [
    {
      id: 1, text: 'Какая же красивая тут природа, просто диву даешься. Кто не лайкает, тот не любит природу. Фу' +
        ' такими быть', likes: 9, comments: 4
    }
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD-POST":
      let newPost = {
        id: state.posts.length + 1,
        text: action.postInput,
        likes: 0,
        comments: 0
      }
      return {...state, posts: [...state.posts, newPost]
      }

    case "SET-USER-PROFILE":
      return {...state, profile: action.profile}

    case "SET-STATUS":
      return {...state, status: action.status}

    case "SAVE-PHOTO-SUCCESS":
      return {...state, profile: {...state.profile, photos: action.photos}}

    default:
      return state
  }
}

export const addNewPost = (postInput) => ({type: 'ADD-POST', postInput})
export const setUserProfile = (profile) => ({type: 'SET-USER-PROFILE', profile})
export const setStatus = (status) => ({type: 'SET-STATUS', status})
export const savePhotoSuccess = (photos) => ({type: 'SAVE-PHOTO-SUCCESS', photos})


export const getProfile = (userId) => (dispatch) => {
  getProfileAPI(userId).then(response => (dispatch(setUserProfile(response))))
}
export const getStatus = (userId) => async (dispatch) => {
  let response = await getStatusAPI(userId)
  dispatch(setStatus(response))
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await updateStatusAPI(status)
  if (response.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export const savePhoto = (photo) => async (dispatch) => {
  let response = await savePhotoAPI(photo)
  if (response.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.photos))
  }
}

export const saveProfileData = (data) => async (dispatch, getState) => {
  let id = getState().auth.id
  let response = await saveProfileDataAPI(data)
  if (response.resultCode === 0) {
    dispatch(getProfile(id))
  }
}

export default profileReducer
