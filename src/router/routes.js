
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
        path: 'instructions',
        component: () => import('pages/InstructionsPage.vue')
      },
      {
        path: 'two-choices',
        component: () => import('pages/TwoChoicesPage.vue')
      },
      {
        path: 'one-input',
        component: () => import('pages/OneInputPage.vue')
      },
      {
        path: 'multi-single-image',
        component: () => import('pages/MultiSingleImagedPage.vue')
      },
      {
        path: 'multi-single-text',
        component: () => import('pages/MultiSingleTextPage.vue')
      }
    ]
  },
  {
    path: '/banner',
    component: () => import('layouts/BannerLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/BannerPage.vue')
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
