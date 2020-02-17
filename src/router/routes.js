import GameLayout from 'layouts/GameLayout'
import BannerLayout from 'layouts/BannerLayout'

import BannerPage from 'pages/BannerPage'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/game',
    component: GameLayout
  },
  {
    path: '/banner',
    component: BannerLayout,
    children: [
      {
        path: '',
        component: BannerPage
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
