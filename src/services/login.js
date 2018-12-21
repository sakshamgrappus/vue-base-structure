import { Api } from './config/request'

const createLogin = payload => {
  return Api.postRequest('admin/login', payload)
}
const createLogout = () => {
  return Api.postRequest('admin/logout')
}

export const Login = { createLogin, createLogout }
