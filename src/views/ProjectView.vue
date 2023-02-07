<template>
  <div class="home">
    <HeroSection class="hero-container">
      <h1> Coding Posts </h1>
    </HeroSection>
    <ProjectPage />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroSection from "@/components/HeroSection.vue";
import ProjectPage from "@/components/pages/projects-page.vue";

export default {
  name: "Project",
  components: {
    ProjectPage,
    HeroSection
},
};
</script>
<style scoped>
.hero-container{
  background-image: url(../assets/codecode2.png);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>