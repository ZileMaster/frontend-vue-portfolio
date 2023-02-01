<template>
  <div class="post-container">
    <h2 class="post-headline">{{ headline }}</h2>
    <p class="post-topic">Topic: {{ topic }}</p>
    <p class="post-description">{{ description }}</p>
    <div class="post-likes">
      <i class="fa fa-thumbs-up"></i> {{ likes }} Likes
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ['headline', 'topic', 'likes', 'description'],

}
</script>
<style scoped>
.post-container {
  background-color: #fafafa;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #ccc;
  margin-bottom: 1rem;
}

.post-headline {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.post-topic {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1rem;
}

.post-description {
  font-size: 1.2rem;
  line-height: 1.5;
  color: #333;
}

.post-likes {
  font-size: 1.2rem;
  color: #555;
  float: right;
  margin-top: 0.5rem;
}

.post-likes i {
  margin-right: 0.5rem;
}
</style>