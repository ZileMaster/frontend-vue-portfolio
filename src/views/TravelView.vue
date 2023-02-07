<template>
  <div class="home">
    <HeroSection class="hero-container">
      <h1> Travel Posts </h1>
    </HeroSection>
    <TravelPage />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroSection from "@/components/HeroSection.vue";
import TravelPage from "@/components/pages/travel-page.vue";

export default {
  name: "Travel",
  components: {
    TravelPage,
    HeroSection
},
};
</script>
<style scoped>
.hero-container{
  background-image: url(../assets/DSC_9759.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>