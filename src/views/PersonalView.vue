<template>
  <div class="home">
    <PersonalPage />
  </div>
</template>

<script>
// @ is an alias to /src
import PersonalPage from "@/components/pages/personal-page.vue";

export default {
  name: "Personal",
  components: {
    PersonalPage,
  },
};
</script>
