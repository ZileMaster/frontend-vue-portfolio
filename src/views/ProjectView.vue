<template>
  <div class="home">
    <ProjectPage />
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectPage from "@/components/pages/projects-page.vue";

export default {
  name: "Project",
  components: {
    ProjectPage,
  },
};
</script>
