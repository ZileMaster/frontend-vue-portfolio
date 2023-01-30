<template>
  <head>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
      crossorigin="anonymous"
    />
  </head>
  <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <h1>Personal Blog</h1>
    <router-view />
  </div>
  <h5 id="footer">
    Powered by: Vue 3 | Vuex 4 | VueStore | Ruby on Rails | Postgres | Axios
  </h5>
</template>

<script>
import Sidebar from "@/components/sidebar/Sidebar.vue";
import { sidebarWidth } from "./components/sidebar/state";
export default {
  components: { Sidebar },
  setup() {
    return { sidebarWidth };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#footer {
  margin-top: 20px;
  bottom: 0;
  width: 100%;
  height: 50px; /* Height of the footer */
  background: #6cf;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
