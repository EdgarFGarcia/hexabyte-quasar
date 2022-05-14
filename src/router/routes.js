
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
      },
      {
        path: 'loadsummary',
        name: 'loadsummary',
        component: () => import('pages/home/loadsummary.vue')
      },
      {
        path: 'voltagedrop',
        name: 'voltagedrop',
        component: () => import('pages/home/voltagedrop.vue')
      },
      {
        path: 'shortcircuit',
        name: 'shortcircuit',
        component: () => import('pages/home/shortcircuit.vue')
      }
    ],
  },
  {
    path: '/dwellingmultipanel',
    name: 'dwellingmultipanel',
    component: () => import ('layouts/DwellingMultiPanel.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/DwellingMultiPanel/manualinput.vue')
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
