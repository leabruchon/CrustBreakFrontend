const routes = [

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },

      { path: '/scan', component: () => import('pages/ScanPage.vue') },

      { path: '/calendar', component: () => import('pages/CalendarPage.vue') },
    ]
  },

  {
    path: '/connexion', 
    component: () => import('pages/authentification/ConnexionPage.vue')
  },

  {
    path: '/inscription',
    component: () => import('pages/authentification/InscriptionPage.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
