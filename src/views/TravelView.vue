<template>
  <div class="home">
    <TravelPage />
  </div>
</template>

<script>
// @ is an alias to /src
import TravelPage from "@/components/pages/travel-page.vue";

export default {
  name: "Travel",
  components: {
    TravelPage,
  },
};
</script>
