<template>
  <div class="travel-page">
    <div class-name="container">
      <div class="theHead">
        <h1 class="headline">Travel Posts</h1>
      </div>
      <Post endpoint="https://frozen-lowlands-12731.herokuapp.com/api/travel_blogs" />
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

.theHead{
  padding-top: 15px;  
  padding-left: 15px;
}

.headline{
  margin-top: 15px;
  border-radius: 15px;
  background-color: aliceblue;
  color: brown;
  width: fit-content;
}

.travel-page{
  background-image: url(../../assets/DSC_9759.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-size: 100%;
}
</style>
