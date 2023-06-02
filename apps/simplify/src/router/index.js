import { createRouter, createWebHistory } from 'vue-router'
import { BASIC_ROUTES } from './routes'

export const router = createRouter({
  history: createWebHistory(),
  routes: BASIC_ROUTES,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export function setupRouter(app) {
  app.use(router)
}
