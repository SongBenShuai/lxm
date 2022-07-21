/**
 * 过滤出合适的路由数组
 * @param {*} menus
 */
export default function filtersMenus(menus) {
  const menu = generateMenu(menus)
  // console.log('过滤器后=>', menu)

  return menu
}

/**
 * 去除没用的children
 */
const generateMenu = (menus) => {
  for (let i = 0; i < menus.length; i++) {
    if ((menus[i].child && menus[i].child.length <= 0) || !menus[i].icon) {
      delete menus[i].child
    }
    if (menus[i].child && menus[i].child.length > 0 && menus[i].icon) {
      generateMenu(menus[i].child)
    }
  }
  return menus
}
