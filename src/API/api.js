import axios from "axios"

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {"API-KEY": "d79c7025-7438-4832-ae51-e52b18f7c68c"}
})


export const getUsersAPI = (currentPage = 1, pageSize = 10) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize})`)
    .then(response => (response.data))
}

export const getProfileAPI = (userId = 2) => {
  return instance.get(`profile/${userId}`).then(response => (response.data))
}

export const unfollow = (userId) => instance.delete(`follow/${userId}`)

export const follow = (userId) => instance.post(`follow/${userId}`)

export const getMe = () => instance.get(`auth/me`).then(response => (response.data))

export const loginAPI = (email, password, rememberMe = false) => {
  return instance.post(`auth/login`, {email, password, rememberMe})
}

export const logoutAPI = () => instance.delete(`auth/login`).then(response => (response.data))

export const getStatusAPI = (userId) => {
  return instance.get(`profile/status/${userId}`).then(response => (response.data))
}

export const updateStatusAPI = (status) => {
  return instance.put(`profile/status`, {status}).then(response => (response.data))
}