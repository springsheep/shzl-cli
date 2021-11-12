import router from '@/router'

function parseUrl(url) {
  if (Object.prototype.toString.call(url) !== '[object String]') {
    return { url: '', isExternal: false }
  }
  if (/^https?:\/\//.test(url)) {
    return {
      url: '/iframe/' + encodeURIComponent(url),
      isExternal: true
    }
  } else if (url.substring(0, 8) === '/iframe/') {
    return {
      url,
      isExternal: true
    }
  } else if (url.charAt(0) === '/') {
    return {
      url: url.toLocaleLowerCase(),
      isExternal: false
    }
  } else {
    return { url: '', isExternal: false }
  }
}

const toRoute = function(item, pids, route) {
  const { url, isExternal } = parseUrl(item.nodeType !== 3 && item.url)
  if (url) {
    item.name = pids.concat(item.id).join('-')
    item.pids = pids
    item.url = url
    console.log('route:::', `@/views${url}/index.js`)
    route.push({
      path: `${url}`,
      // component: isExternal ? () => import ('@/views/iframeTemplateEmpty.vue') : () => import (`@/views${url}/index.js`),
      component: isExternal ? resolve => require(['@/views/iframeTemplateEmpty.vue'], resolve) : resolve => require([`@/views${url}/index.js`], resolve),
      name: item.name,
      icon: item.icon || '',
      meta: item,
      noDropdown: true
    })
  }
  if (Array.isArray(item.children)) {
    item.children.forEach(value => toRoute(value, [...pids, item.id], route))
  }
}

function menuToRoute(menu) {
  const children = []
  menu.forEach(item => {
    toRoute(item, [], children)
  })
  return [{
    path: '/',
    component: () => import ('@/layout'),
    chunkName: 'views/index',
    children,
    hidden: true
  }]
}

export function addRoutes(menu) {
  router.addRoutes(menuToRoute(menu))
}
