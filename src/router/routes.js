import Home from '../pages/Home'
import Menu from '../pages/Menu'
import Game from '../pages/Game'

const routes = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout'),
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: '/menu',
        component: Menu
      },
      {
        path: '/game',
        component: Game
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
