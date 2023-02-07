<template>
  <div class="home">
    <HeroSection class="hero-container">
      <h1> Personal Posts </h1>
    </HeroSection>
    <PersonalPage />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroSection from "@/components/HeroSection.vue";
import PersonalPage from "@/components/pages/personal-page.vue";

export default {
  name: "Personal",
  components: {
    PersonalPage,
    HeroSection
},
};
</script>
<style scoped>
.hero-container{
  background-image: url(../assets/photo-1607473129252-0e25488234f5.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>