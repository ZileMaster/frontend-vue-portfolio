<template>
     <ul class="menu">
      <div
        class="menu-indicator"
        :style="{ left: positionToMove, width: sliderWidth }"
      ></div>
      <li class="menu-item" @click="sliderIndicator(0)" ref="menu-item_0">
        <SideBarLink to="/" icon="fas fa-home" class="menu-link">Home</SideBarLink>
      </li>
      <li class="menu-item" @click="sliderIndicator(1)" ref="menu-item_1">
        <SideBarLink to="/dashboard" icon="fas fa-columns" class="menu-link">Dashboard</SideBarLink>
      </li>
      <li class="menu-item" @click="sliderIndicator(2)" ref="menu-item_2">
        <SideBarLink to="/about" icon="fa-solid fa-users" class="menu-link">About</SideBarLink>
      </li>
      <li class="menu-item" @click="sliderIndicator(3)" ref="menu-item_3">
        <SideBarLink to="/projects" icon="fa-solid fa-code" class="menu-link">Projects</SideBarLink>
      </li>
      <li class="menu-item" @click="sliderIndicator(4)" ref="menu-item_4">
        <SideBarLink to="/travels" icon="fa-regular fa-compass" class="menu-link">Travels</SideBarLink>
      </li>
      <li class="menu-item" @click="sliderIndicator(5)" ref="menu-item_5">
        <SideBarLink to="/personal" icon="fas fa-blog" class="menu-link">Personal</SideBarLink>
      </li>
      <div class="menu-item menu-left">
        <li @click="sliderIndicator(6)" ref="menu-item_6"><SideBarLink v-if="isAuthenticated" to="/login" icon="fa-solid fa-user">
        Login
        </SideBarLink></li>
        <li @click="sliderIndicator(7)" ref="menu-item_7"><SideBarLink v-if="isAuthenticated" to="/signup" icon="fa-solid fa-user-plus">
        SignUp
        </SideBarLink></li>
        <li @click="sliderIndicator(8)" ref="menu-item_8"><SideBarLink v-if="!isAuthenticated" v-on:click="logout" to="/" icon="fa-solid fa-user-minus">
        Signout
        </SideBarLink></li>
    </div>
    </ul>
  </template>

<script>
import SideBarLink from '../sidebar/side-bar-link.vue';
export default{ 
  components: { SideBarLink },
    data(){
        return {
            sliderPosition: 0,
            selectedElementWidth: 0, 
            selectedIndex: 0,
        };
    },
    methods: {
        sliderIndicator(id) {
            let el = this.$refs[`menu-item_${id}`];
            this.sliderPosition = el.offsetLeft + 3;
            this.selectedElementWidth = el.offsetWidth - 5;
            this.selectedIndex = id;
        },
        logout()
        {
            localStorage.clear();
            location.reload();

        }
    },
    computed: {
        positionToMove() {
            return this.sliderPosition + "px";
        },
        sliderWidth() {
            return this.selectedElementWidth + "px";
        },
        isAuthenticated(){
        return localStorage.getItem("user-info")==null;
        },
    },
}

</script>

<style>

:root {
  --active-color: #ffee93;
  --link-text-color: #f1faee;
  --menu-background-color: #1d3557;
  --active-background-color: #132238;
}
/* ul */
.menu {
  padding: 0;
  margin: 0;
  position: relative;
  justify-content: left;
  background-color: var(--menu-background-color);
  display: inline-flex;
  border-radius: 4px;
  list-style-type: none;
  overflow: hidden;
  width: 100%;
}
/* li */
.menu-item {
  display: inline-flex;
  font-size: large;
}
/* a */
.menu-link {
  padding: 0.75rem 1rem;
  display: inline-flex;
  align-items: center;
  color: var(--link-text-color);
  text-decoration: none;
}
.menu-link:hover,
.menu-link.active {
  color: var(--active-color);
  background-color: var(--active-background-color);
}
/* icon */
.menu-icon {
  height: 1.5rem;
  width: 1.5rem;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  margin-right: 0.2rem;
}
/* slider */
.menu-indicator {
  position: absolute;
  height: 0.25rem;
  background-color: var(--active-color);
  bottom: 0;
  left: 0;
  margin: auto;
  width: 2rem;
  transition: all ease 0.5s;
}

</style>

<style scoped>
.menu-left{
    justify-content: right;
}
</style>