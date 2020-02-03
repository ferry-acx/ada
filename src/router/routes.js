
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
    component: () => import('layouts/GameLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/InstructionsPage.vue')
      },
      {
        path: 'two-choices',
        component: () => import('pages/TwoChoicesPage.vue')
      },
      {
        path: 'one-input',
        component: () => import('pages/OneInputPage.vue')
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
