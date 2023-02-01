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
    <div class="container">
      <h1>Personal Blog</h1>
      <router-view />
    </div>
  <h5 id="footer">
    Powered by: Vue 3 | Vuex | Ruby on Rails | Postgres | Axios
  </h5>
  </div>
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

.container {
  min-height: 100%;
  overflow: auto;
  padding-bottom: 100px;
  height: 110%;
}

#footer {
  background-color: #2c3e50;
  color: aliceblue;
  position: relative; 
  height: 50px;
  clear: both;
  margin-top: 5%;
}

</style>
