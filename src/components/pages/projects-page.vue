<template>
  <div class="project-page">
    <div class="container">
      <h1 class="headline">Project Posts</h1>
      <Post endpoint="http://localhost:3000/api/project_pages" />
    </div>
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

.headline{
  margin-top: 15px;
  border-radius: 15px;
  background-color: aliceblue;
  color: brown;
  width: fit-content;
}

.project-page{
  background-image: url(../../assets/codecode.jpg);
  background-size: cover;
  background-attachment: fixed;
}
</style>