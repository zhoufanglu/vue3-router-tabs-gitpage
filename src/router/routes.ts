import type { RouteRecordRaw } from 'vue-router'

const layout = () => import('@/views/layout/index.vue')

import test from '@/router/modules/test'

const chromeTest = () => import('@/views/chrome-test/index.vue')
/**
 * 基础路由
 */
const basePage: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    component: layout,
    meta: { title: '' },
    children: [...test]
  },
  {
    path: '/chrome-test',
    component: chromeTest
  }
]

const routes = [...basePage]

export default routes
