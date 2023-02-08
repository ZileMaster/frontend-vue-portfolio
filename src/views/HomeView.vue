<template>
  <div class="home">
    <HomePage msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from "@/components/pages/home-page.vue";
import HeroSection from "@/components/HeroSection.vue";

export default {
  name: "HomeView",
  components: {
    HomePage, 
    HeroSection
  },
};
</script>

<style scoped>
.hero-container{
  background-image: url(@/assets/DALL·E\ 2023-02-07\ 21.36.17\ -\ medieval\ serbia\ cool\ landscape\ oil\ painting\ for\ background.png);
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
