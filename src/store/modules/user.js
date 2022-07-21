import API from '@/api/login'
import { setItem, getItem, removeAllItem } from '../../utils/storeage'

export default {
  namespaced: true,
  state: {
    token: '' || getItem('token'),
    userInfo: ''
  },
  mutations: {
    SETTOKEN(state, res) {
      state.token = res
      setItem('token', res)
    },
    SETUSERINFO(state, res) {
      state.userInfo = res
    }
  },
  actions: {
    // 登录
    async getLogin({ commit }, plyoad) {
      try {
        const response = await API.login(plyoad)
        console.log(response.data.data.token)
        commit('SETTOKEN', response.data.data.token)
        return response.data.data.token
      } catch (e) {
        console.log(e)
      }
    },
    //  用户信息
    async getUserInfo({ commit }) {
      try {
        const response = await API.getUserInfo()
        commit('SETUSERINFO', response.data.data)
        return response.data.data
      } catch (e) {
        console.log(e)
      }
    },
    // 退出登录
    logout({ commit }) {
      removeAllItem('token', '')
    }
  }
}
