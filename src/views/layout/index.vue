<template>
  <div class="p-layout">
    <h4>所有路由（点击跳转）</h4>
    <ul>
      <el-button v-for="i in routeChildren" :key="i.path" @click="router.push(i.path)">{{
        i.path
      }}</el-button>
    </ul>
    <h4>插件导航</h4>
    <RouterTabs
      :tabs="tabs"
      :route="route"
      @handleTabClick="handleTabClick"
      @handleDeleteAllTab="handleDeleteAllTab"
    ></RouterTabs>
  </div>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import routes from '@/router/routes'
  import type { RouteRecordRaw } from 'vue-router'
  const routeChildren = routes[0].children
  /**********************从这里开始***********************/
  import 'vue3-router-tabs/lib/style.css' // 引入样式
  import { RouterTabs } from 'vue3-router-tabs' // 引入组件
  import type { TabType } from 'vue3-router-tabs/lib/components/router-tabs/types' // 引入类型 js可以不引入

  import { useRoute, useRouter } from 'vue-router'
  const route = useRoute()
  const router = useRouter()
  /*[
    { name: '表格', path: '/table', activeMenu: 'table' },
      { name: '标题', path: '/title', activeMenu: 'title' },
      { name: '卡片', path: '/card', activeMenu: 'card' }
    ]*/
  // 初始化tabs
  const tabs = ref<TabType[]>(
    routeChildren!.map((route: RouteRecordRaw) => {
      return {
        name: route.path,
        path: route.path,
        activeMenu: route.path
      } as TabType
    })
  )
  // 点击tab事件，一般直接跳转路由
  const handleTabClick = (tab: TabType) => {
    console.log(20, tab)
    router.push(tab.path)
  }
  // 右侧关闭事件
  const handleDeleteAllTab = (type: 'all' | 'other') => {
    if (type === 'all') {
      tabs.value = []
    } else if (type === 'other') {
      const curPageTab = tabs.value.find((tab: TabType) => tab.path === route.path)
      tabs.value = curPageTab ? [curPageTab] : []
    }
  }
</script>

<style scoped lang="css">
  .p-layout {
    border: solid 1px red;
  }
  .content {
    border: solid 1px blue;
    padding: 30px;
    margin-top: 6px;
  }
</style>
