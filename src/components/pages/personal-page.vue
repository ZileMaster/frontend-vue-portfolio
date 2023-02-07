<template>
  <div class-name="container">
    <Post endpoint="https://frozen-lowlands-12731.herokuapp.com/api/personal_blogs" />
  </div>
</template>

<script>
import Post from "../Post.vue";
export default {
  components: { Post },
};
</script>

<style>
.container {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  
}
</style>
