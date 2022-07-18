import API from '@/api/login'

export default {
  namespaced: true,
  state: () => {
  },
  mutations: {},
  actions: {
    async getLogin({ commit }, plyoad) {
      try {
        const response = await API.login(plyoad)
        console.log(response)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
