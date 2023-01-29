<template>
  <div class-name="container">
    <h3>projects page!</h3>
    <Post endpoint="http://localhost:3000/api/project_pages" />
  </div>
</template>

<script>
import Post from "../Post.vue";
export default {
  components: { Post },
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background-color: #e8e8e8;
}
</style>
