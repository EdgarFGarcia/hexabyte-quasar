
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
  // dwelling multi panel
  {
    path: '/dwellingmultipanel',
    name: 'dwellingmultipanel',
    component: () => import ('layouts/DwellingMultiPanel.vue'),
    children: [
      {
        path: '',
        name: 'selectiondwelling',
        component: () => import('pages/DwellingMultiPanel/panelselection.vue')
      },
      {
        path: 'opendwellingmulti',
        name: 'opendwellingmulti',
        component: () => import('pages/DwellingMultiPanel/manualinput.vue')
      }
    ]
  },
  {
    path: '/dwellingmulticalculation',
    name: 'dwellingmulticalculation',
    component: () => import('layouts/DwellingMultiPanelCalculation.vue'),
    children: [
      {
        path: '',
        name: '/homedwellingmulticalculation',
        component: () => import('pages/DwellingMultiPanel/manualinput.vue')
      },
      {
        path: 'loadsummarydwellingmultipanel',
        name: 'loadsummarydwellingmultipanel',
        component: () => import('pages/DwellingMultiPanel/loadsummary.vue')
      },
      {
        path: 'voltagedropdwellingmultipanel',
        name: 'voltagedropdwellingmultipanel',
        component: () => import('pages/DwellingMultiPanel/voltagedrop.vue')
      },
      {
        path: 'shortcircuitdwellingmultipanel',
        name: 'shortcircuitdwellingmultipanel',
        component: () => import('pages/DwellingMultiPanel/shortcircuit.vue')
      }
    ]
  },
  {
    path: '/dwelling_multi_main_panel',
    name: 'dwelling_multi_main_panel',
    component: () => import('layouts/Dwelling_Multi_Main_Panel.vue'),
    children: [
      {
        path: '',
        name: 'dwelling_multi_panel_main_calculation',
        component: () => import('pages/DwellingMultiPanel/main_panel_output.vue')
      }
    ]
  },
  // non dwelling single panel
  {
    path: '/nondwellingsinglepanel',
    name: '/nondwellingsinglepanel',
    component: () => import ('layouts/NonDwellingSinglePanel.vue'),
    children: [
      {
        path: '',
        name: 'homenondwellingsingle',
        component: () => import('pages/NonDwellingSinglePanel/manualinput.vue')
      },
      {
        path: 'loadsummary',
        name: 'loadsummarynondwellingsingle',
        component: () => import('pages/NonDwellingSinglePanel/loadsummary.vue')
      },
      {
        path: 'voltagedrop',
        name: 'voltagedropnondwellingsingle',
        component: () => import('pages/NonDwellingSinglePanel/voltagedrop.vue')
      },
      {
        path: 'shortcircuit',
        name: 'shortcircuitnondwellingsingle',
        component: () => import('pages/NonDwellingSinglePanel/shortcircuit.vue')
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
