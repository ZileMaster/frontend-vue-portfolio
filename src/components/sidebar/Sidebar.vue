<template>
  <div class="sidebar bg1" :style="{ width: sidebarWidth }">
    
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
    <SideBarLink to="/travels" icon="fa-regular fa-compass">Travels</SideBarLink>
    <SideBarLink to="/personal" icon="fas fa-blog">Personal</SideBarLink>

    <SideBarLink v-if="isAuthenticated" to="/login" icon="fa-solid fa-user" class="bot">
      Login
    </SideBarLink>
    <SideBarLink v-if="isAuthenticated" to="/signup" icon="fa-solid fa-user-plus" class="bot">
      SignUp
    </SideBarLink>
    <SideBarLink v-if="!isAuthenticated" v-on:click="logout" to="/" icon="fa-solid fa-user-minus" class="bot">
      Signout
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
  computed: {
    isAuthenticated(){
      return localStorage.getItem("user-info")==null;
    },
  },
  methods: {
    logout()
    {
      localStorage.clear();
      location.reload();

    }
  }
};
</script>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #0b79a5;
  --sidebar-item-active: #014381;
}

@keyframes slide {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
}

.bg1 {
  animation: slide 3s ease-in-out infinite alternate;
  background: linear-gradient(to right, #10442a, #2b8555);
}

.bot {
  position: fixed;
  transform: translateY(100%);
  display: flex;
  align-items: flex-end;
}
</style>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.sidebar {
  font-family: "Roboto", sans-serif;
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
  height: 100%
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


.bg {
  animation:slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
  bottom:0;
  left:-50%;
  opacity:.5;
  position:fixed;
  right:-50%;
  top:0;
  z-index:-1;
}

.bg2 {
  animation-direction:alternate-reverse;
  animation-duration:4s;
}

.bg3 {
  animation-duration:5s;
}
/* 
@keyframes slide {
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(60%);
  }
} */

</style>
