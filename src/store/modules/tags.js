import { setItem, getItem } from '../../utils/storeage'
import router from '@/router'

export default {
  namespaced: true,
  state: {
    tagList: getItem('tagList') || [{
      path: '/',
      title: '后台首页'
    }]
  },
  mutations: {
    ADD_TAG(state, obj) {
      let flag = false
      state.tagList.forEach((v) => {
        if (v.path === obj.path) {
          flag = true
        }
      })

      if (!flag) {
        state.tagList.push(obj)
        setItem('tagList', state.tagList)
      }
    },
    // 删除单个
    DEL_TAG(state, path) {
      state.tagList = state.tagList.filter((v, i) => {
        return v.path !== path
      })
      setItem('tagList', state.tagList)
    },
    // 删除其他
    HANDLE_CLOSE_OTHER(state, path) {
      state.tagList = state.tagList.filter((v) => {
        return v.path === path
      })
      state.tagList.forEach((v) => {
        if (v.path !== '/') {
          state.tagList.unshift({
            path: '/',
            title: '后台首页'
          })
        }
      })

      setItem('tagList', state.tagList)
    },
    // 删除所有
    HANDLE_CLOSE_ALL(state) {
      state.tagList = state.tagList.filter((v) => {
        return v.path === '/'
      })
      setItem('tagList', state.tagList)
      router.push('/')
    }
  },
  actions: {
    addTag({ commit }, obj) {
      commit('ADD_TAG', obj)
    },
    delTag({ commit }, path) {
      commit('DEL_TAG', path)
    },
    handleCloseOther({ commit }, path) {
      // console.log(path)
      commit('HANDLE_CLOSE_OTHER', path)
    },
    handleCloseAll({ commit }) {
      commit('HANDLE_CLOSE_ALL')
    }
  }
}
