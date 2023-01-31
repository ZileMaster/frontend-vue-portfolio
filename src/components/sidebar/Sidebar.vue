<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <div>V</div>
        <div>S</div>
      </span>
      <span v-else> Vue Sidebar </span>
    </h1>

    <SideBarLink to="/" icon="fas fa-home">Home</SideBarLink>
    <SideBarLink to="/dashboard" icon="fas fa-columns">Dashboard</SideBarLink>
    <SideBarLink to="/about" icon="fa-solid fa-users">About</SideBarLink>
    <SideBarLink to="/projects" icon="fa-solid fa-code">Projects</SideBarLink>
    <SideBarLink to="/travels" icon="fa-regular fa-compass"
      >Travels</SideBarLink
    >
    <SideBarLink to="/personal" icon="fas fa-blog">Personal</SideBarLink>

    <SideBarLink to="/login" icon="fa-solid fa-user" class="bot">
      Login
    </SideBarLink>
    <SideBarLink to="/signup" icon="fa-solid fa-user-plus" class="bot">
      SignUp
    </SideBarLink>
    <span
      class="collapse-icon"
      :class="{ 'rotate-180 ': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
import SideBarLink from "./side-bar-link.vue";
export default {
  props: {},
  components: { SideBarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}

.bot {
  position: fixed;
  transform: translateY(100%);
  display: flex;
  align-items: flex-end;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.2em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
.sidebar h1 {
  height: 2.5em;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
