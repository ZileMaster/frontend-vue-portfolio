<template>
  <div class="home">
    <HomePage msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from "@/components/pages/home-page.vue";

export default {
  name: "HomeView",
  components: {
    HomePage,
  },
};
</script>

<style>

.home{
  position: relative;
  width: 110%;
  height: 110%;
  margin-left: -15px;
}

</style>
