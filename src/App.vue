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
      <div :style="{ marginLeft: sidebarWidth }">
        <div class="container">
          <router-view />
        </div>
      </div>
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar/Sidebar.vue";
import { sidebarWidth } from "./components/sidebar/state";
import Navbar from "./components/navbar/Navbar.vue";

export default {
  components: { Sidebar, Navbar },
  setup() {
    return { sidebarWidth : window.innerWidth < 950 ? 38 : sidebarWidth };
  },
  
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.container {
  min-height: 650px;
  overflow: hidden;
  height: 100%;
  margin-right: -15px;
  position: relative;
}

.appMain {
  background-image: url(./assets/DALL·E\ 2023-02-05\ 23.45.16\ -\ minimalist\ background\ with\ some\ details.png);
  background-size: auto;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;  
}

.with-margin {
  margin-left: 180px;
}

@media (max-width: 950px) {
  .with-margin {
    margin-left: 38px;
  }
}

</style>
