export default function filterRoutes(params) {
  // console.log(params)
  const newRoutes = []
  params.forEach((item) => {
    item.child.forEach((v) => {
      const routes = menuRoutes(v)
      newRoutes.push(routes)
    })
  })
  return newRoutes
}

/**
 * 把所有菜单数据过滤成路由数据
 */
function menuRoutes(v) {
  if (!v) return null
  const route = {
    path: v.frontpath,
    name: v.icon,
    meta: {
      title: v.name,
      icon: v.icon,
      desc: v.desc
    }
  }
  route.component = () => import(`../views/${v.desc}`)
  return route
}
