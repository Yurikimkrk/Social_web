import {getUsersAPI, follow as followAPI, unfollow as unfollowAPI} from "../API/api"

let initialState = {
  users: [],
  pageSize: 8,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [1]
}

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u
        })
      }
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u
        })
      }
    case "SET-USERS":
      return {...state, users: action.users}
    case "SET-CURRENT-PAGE":
      return {...state, currentPage: action.currentPage}
    case "SET-TOTAL-USERS-COUNT":
      return {...state, totalUsersCount: action.totalUsersCount}
    case "TOGGLE-FETCHING":
      return {...state, isFetching: action.isFetching}
    case "TOGGLE-IS-FOLLOWING-PROGRESS":
      return {
        ...state, followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state
  }
}

export const followSuccess = (userId) => ({type: 'FOLLOW', userId})
export const unfollowSuccess = (userId) => ({type: 'UNFOLLOW', userId})
export const setUsers = (users) => ({type: 'SET-USERS', users})
export const setCurrentPage = (currentPage) => ({type: 'SET-CURRENT-PAGE', currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: 'SET-TOTAL-USERS-COUNT', totalUsersCount})
export const toggleFetching = (isFetching) => ({type: 'TOGGLE-FETCHING', isFetching})
export const toggleFollowingProgress = (followingInProgress, userId) => ({
  type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
  followingInProgress,
  userId
})

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleFetching(true))
  getUsersAPI(currentPage, pageSize)
    .then(response => {
      dispatch(toggleFetching(false))
      dispatch(setUsers(response.items))
      dispatch(setTotalUsersCount(response.totalCount))
      dispatch(setCurrentPage(currentPage))
    })
}

export const follow = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId))
  followAPI(userId)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId))
      }
      dispatch(toggleFollowingProgress(false, userId))
    })

}

export const unfollow = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId))
  unfollowAPI(userId)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId))
      }
      dispatch(toggleFollowingProgress(false, userId))
    })

}

export default usersReducer
