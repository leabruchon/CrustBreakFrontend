
const routes = [
  
  
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },

      { path: '/scan', component: () => import('pages/ScanPage.vue') },

      { path: '/calendar', component: () => import('pages/CalendarPage.vue') },

      { path: '/recipe', component: () => import('pages/RecipePage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
