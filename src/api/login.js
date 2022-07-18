import request from '../utils/request'

const login = (data) => {
  return request({
    url: '/admin/login',
    method: 'post',
    data
  })
}

export default {
  login
}
