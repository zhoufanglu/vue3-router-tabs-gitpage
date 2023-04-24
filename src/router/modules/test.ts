const testHome = () => import('@/views/test/index.vue')
const propDemo = () => import('@/views/test/prop-demo/index.vue')
const longList_1 = () => import('@/views/longList/longList_1.vue')
const longList_2 = () => import('@/views/longList/longList_2.vue')
// 表格hook测试页面
const tableA = () => import('@/views/table-A/index.vue')
const tableB = () => import('@/views/table-B/index.vue')
// keep-alive 测试页面
const keepAlive = () => import('@/views/test/keep-alive/index.vue')
const keepAliveDetail = () => import('@/views/test/keep-alive-detail/index.vue')

import type { RouteRecordRaw } from 'vue-router'

const test: RouteRecordRaw[] = [
  {
    path: '/home',
    component: longList_1
  },
  {
    path: '/1',
    component: longList_2
  },
  {
    path: '/2',
    component: testHome
  },
  {
    path: '/3',
    component: propDemo
  },
  {
    path: '/4',
    component: tableA
  },
  {
    path: '/5',
    component: tableB
  },
  {
    path: '/6',
    component: keepAlive,
    children: [
      {
        path: '/keep-alive-detail/:id',
        component: keepAliveDetail
      }
    ]
  }
]

export default test
