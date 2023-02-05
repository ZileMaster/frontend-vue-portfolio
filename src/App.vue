<template>
  <head>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
      crossorigin="anonymous"
    />
  </head>
  <div class="appMain">
    <Sidebar />
      <div :style="{ 'margin-left': sidebarWidth }">
        <div class="container">
          <router-view />
        </div>
      </div>
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
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.container {
  min-height: 650px;
  overflow: hidden;
  height: 110%;
  margin-right: -15px;
  position: relative;
}

.appMain{
  background-color: #2c3e50;
  z-index: -1;
  height: max-content;
}

</style>
