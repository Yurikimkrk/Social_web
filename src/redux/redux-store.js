import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import messagesReducer from "./messages-reducer"
import usersReducer from "./users-reducer"
import profileReducer from "./profile-reducer"
import authReducer from "./auth-reducer"
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import appReducer from "./app-reducer"

let reducers = combineReducers({
  app: appReducer,
  messagesPage: messagesReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store