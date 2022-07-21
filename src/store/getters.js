const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  menuList: (state) => state.permission.menuList,
  tagList: (state) => state.tags.tagList
}

export default getters
