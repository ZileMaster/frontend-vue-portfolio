<template>
  <div class-name="container">
    <h3>travel page!</h3>
    <Post endpoint="http://localhost:3000/api/travel_blogs" />
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
