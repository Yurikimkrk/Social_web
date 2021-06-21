import {combineReducers, createStore} from "redux"
import messagesReducer from "./messages-reducer"
import postsReducer from "./posts-reducer"
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  messagesPage: messagesReducer,
  postsPage: postsReducer,
  usersPage: usersReducer
})

let store = createStore(reducers)

export default store