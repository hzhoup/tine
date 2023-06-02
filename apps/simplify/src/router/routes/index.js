import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from './basic'

export const HOME_ROUTE = {
  path: '/',
  name: 'Home',
  redirect: '/dashboard',
  meta: { title: 'Home' }
}

export const LOGIN_ROUTE = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/sys/login/index.vue'),
  meta: { title: 'Login' }
}

export const BASIC_ROUTES = [HOME_ROUTE, LOGIN_ROUTE, REDIRECT_ROUTE, PAGE_NOT_FOUND_ROUTE]
