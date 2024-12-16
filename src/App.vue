<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Sidebar from '@/components/sidebar/Sidebar'
import { sidebarWidth } from '@/components/sidebar/state'

export default {
  components: { Sidebar },
  setup() {
    const route = useRoute()
    const showSidebar = computed(() => route.path !== '/login')
    return { sidebarWidth, showSidebar }
  }
}
</script>

<template>
  <div id="app">
    <Sidebar v-if="showSidebar" />
    <div :style="{ 'margin-left': showSidebar ? sidebarWidth : '0' }">
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>