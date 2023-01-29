<template>
  <div class="container">
    <LoginPage />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginPage from "@/components/pages/login-page.vue";

export default {
  name: "Login",
  components: {
    LoginPage,
  },
};
</script>
