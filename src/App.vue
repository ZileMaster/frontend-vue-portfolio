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
    <template v-if="innerWidth < 750">
      <Navbar />
    </template>
    <template v-else>
      <Sidebar />
    </template>
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
import { ref } from 'vue';
import { onMounted } from "vue";

export default {
  components: { Sidebar, Navbar },
  setup() {
    const innerWidth = ref(window.innerWidth);
    onMounted(() => {
      window.addEventListener("resize", () => {
        innerWidth.value = window.innerWidth;
      });
    });
    return {
      innerWidth,
      sidebarWidth: window.innerWidth < 750 ? 0 : sidebarWidth,
    };
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
  background-color: aliceblue;
  background-size: 100vh 100vw;
}

.container {
  overflow: hidden;
}

.appMain {
}

@media (max-width: 750px) {
  .with-margin {
    margin-left: 0;
  }
}

</style>
