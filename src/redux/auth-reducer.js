import {getMe, getProfileAPI, loginAPI, logoutAPI} from "../API/api"
import {stopSubmit} from "redux-form"

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
        ...action.auth
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

export const setAuthUserData = (id, login, email, isAuth) => ({
  type: 'SET-AUTH',
  auth: {id, login, email, isAuth}
})
export const setAuthUserProfile = (user) => ({type: 'SET-AUTH-USER-PROFILE', user})

export const getAuthUserData = () => async (dispatch) => {
  let response = await getMe()
  if (response.resultCode === 0) {
    let {id, login, email} = response.data
    dispatch(setAuthUserData(id, login, email, true))
    let profile = await getProfileAPI(id)
    dispatch(setAuthUserProfile(profile))
  }

}

export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await loginAPI(email, password, rememberMe)
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    dispatch(stopSubmit('login', {_error: response.data.messages.length > 0 ? response.data.messages[0] : 'some'}))
  }
}

export const logout = () => async (dispatch) => {
  let response = await logoutAPI()
  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export default authReducer
