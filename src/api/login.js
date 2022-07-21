import request from '../utils/request'

const login = (data) => {
  return request({
    url: '/admin/login',
    method: 'POST',
    data
  })
}
const getUserInfo = () => {
  return request({
    url: '/admin/getinfo',
    method: 'POST'
  })
}
// 退出登录
const logOut = () => {
  return request({
    url: '/admin/logout',
    method: 'post'
  })
}
export default {
  login,
  getUserInfo,
  logOut
}
