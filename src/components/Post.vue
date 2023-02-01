<template>
  <div class="mb-3">
    <ul v-for="post in posts" :key="post.id">
      <div @click="goToPost(post.id)" class="byPost card">
        <li class="card-tittle">{{ post.headline }}</li>
        <li class="card-text">{{ post.description }}</li>
      </div>
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
  methods: {
    goToPost(id){
      axios
      .get(`${this.endpoint}/${id}`)
      .then((response) => {
        console.warn(response.data.headline);
        
        this.$router.push({ 
          name: "post", 
          params: {
            headline: response.data.headline, 
            description: response.data.description, 
            likes: response.data.likes, 
            topic: response.data.topic
          }
        });
      })
      .catch((error) => console.log(error));
    }
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
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;
}

.card-tittle {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-text {
  font-size: 18px;
}

.byPost {
  display: block;
  margin-bottom: 20px;
  cursor: pointer;
}

.byPost:hover {
  transform: scale(1.1);
}

ul {
  list-style: none;
  padding: 0;
}
</style>
