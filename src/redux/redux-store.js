import {applyMiddleware, combineReducers, createStore} from "redux"
import messagesReducer from "./messages-reducer"
import usersReducer from "./users-reducer"
import profileReducer from "./profile-reducer"
import authReducer from "./auth-reducer"
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"

let reducers = combineReducers({
  messagesPage: messagesReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store