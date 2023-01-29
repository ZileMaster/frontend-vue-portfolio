<template>
  <div class="container">
    <SignupPage />
  </div>
</template>

<script>
// @ is an alias to /src
import SignupPage from "@/components/pages/signup-page.vue";

export default {
  name: "Signup",
  components: {
    SignupPage,
  },
};
</script>
