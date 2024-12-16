import { ref, computed } from 'vue'

export const collapsed = ref(true)
export const hideSidebar = () => (collapsed.value = true)
export const showSidebar = () => (collapsed.value = false)

export const SIDEBAR_WIDTH = 180
export const SIDEBAR_WIDTH_COLLAPSED = 38
export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)