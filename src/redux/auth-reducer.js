import {getMe, getProfileAPI, loginAPI, logoutAPI} from "../API/api"

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

export const setAuthUserData = (id, login, email, isAuth) => ({type: 'SET-AUTH',
  auth: {id, login, email, isAuth}})
export const setAuthUserProfile = (user) => ({type: 'SET-AUTH-USER-PROFILE', user})

export const getAuthUserData = () => (dispatch) => {
  getMe()
    .then(response => {
      if (response.resultCode === 0) {
        let {id, login, email} = response.data
        dispatch(setAuthUserData(id, login, email, true))
        getProfileAPI(id)
          .then(response => {
            dispatch(setAuthUserProfile(response))
          })
      }
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {
  loginAPI(email, password, rememberMe)
    .then(response => {
      if (response.resultCode === 0) {
        dispatch(getAuthUserData())
      }
    })
}

export const logout = () => (dispatch) => {
  logoutAPI()
    .then(response => {
      if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
}

export default authReducer
