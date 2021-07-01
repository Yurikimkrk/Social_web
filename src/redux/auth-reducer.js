import {getMe, getProfileAPI} from "../API/api"

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  user: null
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case "SET-AUTH":
      return {
        ...state,
        ...action.auth,
        isAuth: true
      }
    case "SET-AUTH-USER-PROFILE":
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}

export const setAuthUserData = (id, login, email) => ({type: 'SET-AUTH', auth: {id, login, email}})
export const setAuthUserProfile = (user) => ({type: 'SET-AUTH-USER-PROFILE', user})

export const getAuthUserData = () => (dispatch) => {
  getMe()
    .then(response => {
      if (response.resultCode === 0) {
        let {id, login, email} = response.data
        dispatch(setAuthUserData(id, login, email))
        getProfileAPI(id)
          .then(response => {
            dispatch(setAuthUserProfile(response))
          })
      }
    })

}

export default authReducer
