export const PAGE_NOT_FOUND_ROUTE = {
  path: '/:path(.*)*',
  name: '404',
  component: () => import('@/views/sys/exception/index.vue'),
  meta: { title: '404' }
}

export const REDIRECT_ROUTE = {
  path: '/redirect',
  name: 'Redirect',
  component: () => import('@/views/sys/redirect/index.vue'),
  meta: { title: 'Redirect' }
}
