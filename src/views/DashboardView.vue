<template>
  <div class="home">
    <DashboardPage />
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardPage from "@/components/pages/dashboard-page.vue";

export default {
  name: "Dashboard",
  components: {
    DashboardPage,
  },
  mounted()
  {
    let user = localStorage.getItem('user-info');
    if (!user){
      this.$router.push({name: 'signup' });
    }
  }
};
</script>
