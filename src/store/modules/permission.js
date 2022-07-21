import filtersMenus from '../../utils/menu'
import filterRoutes from '@/utils/router'

export default {
  namespaced: true,
  state: {
    menuList: []
  },
  mutations: {
    SET_MENU_LIST(state, menu) {
      menu.forEach((v) => {
        state.menuList.push(v)
      })
    }
  },
  actions: {
    filterRoutes({ commit }, menus) {
      console.log(menus)
      const menu = filtersMenus(menus)
      // console.log('111', menu)
      commit('SET_MENU_LIST', menu)

      const route = filterRoutes(menu)
      console.log('=>', route)
      return route
    }
  }
}
