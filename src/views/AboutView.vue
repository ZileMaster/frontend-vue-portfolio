<template>
  <div class-name="about">
    <AboutPage />
  </div>
</template>

<script>
import AboutPage from "@/components/pages/about-page.vue"
export default{
  name: "AboutView", 
  components: {
    AboutPage,
  },
};
</script>

<style>
  .about{
    position: relative;
    width: 110%;
    height: 110%;
    margin-left: -15px;
    color: #e8e8e8;
  }
</style>