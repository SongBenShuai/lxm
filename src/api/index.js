import request from '../utils/request'

const getstatistics1 = () => {
  return request({
    url: '/admin/statistics1',
    method: 'GET'
  })
}

const getstatistics2 = () => {
  return request({
    url: '/admin/statistics2',
    method: 'GET'
  })
}

const getstatistics3 = (params) => {
  return request({
    url: `/admin/statistics3?type=${params}`,
    method: 'GET'
  })
}

export default {
  getstatistics1,
  getstatistics2,
  getstatistics3
}
