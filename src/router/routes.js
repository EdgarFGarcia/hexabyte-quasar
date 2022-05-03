
const routes = [
  {
    path: '/',
    component: () => import('pages/loading.vue'),
  },
  {
    path: '/selection',
    name: 'selection',
    component: () => import('pages/selection.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/home/manualinputpreset.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
