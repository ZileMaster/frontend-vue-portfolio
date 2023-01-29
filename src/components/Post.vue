/* eslint-disable */
<template>
  <div class="card mb-3">
    <ul v-for="post in posts" :key="post.id">
      <li class="card-tittle">{{ post.headline }}</li>
      <li class="card-text">{{ post.description }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["endpoint"],
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    axios
      .get(this.endpoint)
      .then((response) => (this.posts = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
.card {
  width: 50%;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

.card-tittle {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-text {
  font-size: 18px;
}

ul {
  list-style: none;
  padding: 0;
}
</style>
