<script>
import SidebarLink from './SidebarLink'
import { collapsed, hideSidebar, showSidebar, sidebarWidth } from './state'

export default {
  name: 'AppSidebar',
  components: { SidebarLink },
  setup() {
    return { collapsed, hideSidebar, showSidebar, sidebarWidth }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }" @mouseenter="showSidebar" @mouseleave="hideSidebar">
   
    <div class="sidebar-top">
      <h1>
        <span v-if="collapsed">
          <div>S</div>
          <div>P</div>
        </span>
        <span v-else>ShapeUp</span>
      </h1>
    </div>

    <div>
        <SidebarLink to="/friends" icon="fa-users" :useLessMargin="false">Amigos</SidebarLink>
        <SidebarLink to="/training" icon="dumbbell" :useLessMargin="false">Treinos</SidebarLink>
        <SidebarLink to="/nutrition" icon="bread-slice" :useLessMargin="false">Nutrição</SidebarLink>
        <SidebarLink to="/profile" icon="user" :useLessMargin="false">Perfil</SidebarLink>
        <SidebarLink to="/subscriptions" icon="chart-simple" :useLessMargin="false">Planos</SidebarLink>
        <SidebarLink to="/" icon="home" useLessMargin="false">Inicio</SidebarLink>
    </div>

    <div class="sidebar-bottom">
      <SidebarLink to="/settings" icon="gear" :useLessMargin="true">Opções</SidebarLink>
      <SidebarLink to="/login" icon="arrow-right-from-bracket" :useLessMargin="true">Sair</SidebarLink>
    </div>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #0d1321;
  --sidebar-item-hover: #1b2d57;
  --sidebar-item-active: #163274;
}

.sidebar {
  
  justify-content: space-between;
  color: white;
  
  background-color: var(--sidebar-bg-color);
  
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebar-top {
  display: flex;
  flex-direction: column;
}

.sidebar-bottom {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.collapse-icon {
  cursor: pointer;
  transition: transform 0.3s;
}
</style>