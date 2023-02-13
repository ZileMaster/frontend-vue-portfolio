<template>
    <div class="mb-3 container">
      <ul v-for="(post, index) in posts.slice(-1)" :key="post.id">
        <div @click="goToPost(post.id)" class="byPost card">
          <div v-if="post.topic === 'project'" class="card-header">
            <img src="../assets/codecode.jpg" alt="rover" />
          </div>
          <div v-if="post.topic === 'travel'" class="card-header">
            <img src="../assets/travelblogphoto.jpg" alt="rover" />
          </div>
          <div v-if="post.topic === 'personal'" class="card-header">
            <img src="../assets/blogphoto.jpg" alt="rover" />
          </div>
          <div class="card__body">
            <h4> {{ post.headline }}</h4>
            <p>{{ post.description }}</p>
            <span class="tag tag-red">{{ post.topic }}</span>
          </div>
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
        this.$store.commit('SET_CURRENT_POST_ID', id);
        this.$router.push({ name: 'post', params: { id } });
      }
    },
    mounted() {
        axios
            .get(this.endpoint)
            .then((response) => {
            this.posts = response.data;
            })
            .catch((error) => console.log(error));
        }
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  
  body{
    font-family: "Roboto", sans-serif;
    color: #10182f;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  .card-header img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    margin-block: 2rem;
    gap: 2rem;
  }
  
  .card {
    display: flex;
    flex-direction: column;
    width: clamp(20rem, calc(20rem + 2vw), 22rem);
    overflow: hidden;
    box-shadow: 0 .1rem 1rem rgba(0, 0, 0, 0.1);
    border-radius: 1em;
    background: #ECE9E6;
    background: linear-gradient(to right, #FFFFFF, #ECE9E6);
    margin-bottom: 20px;
    margin-top: 10px;
    transition: transform 0.3s ease-in-out;
  
  }
  
  .card__body {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }
  
  
  .tag {
    align-self: flex-start;
    padding: .25em .75em;
    border-radius: 1em;
    font-size: .75rem;
  }
  
  .tag + .tag {
    margin-left: .5em;
  }
  
  .tag-red {
    background: #cb2d3e;
  background: linear-gradient(to bottom, #ef473a, #cb2d3e);
    color: #fafafa;
  }
  
  .card__body h4 {
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  
  .byPost {
    display: block;
    margin-bottom: 20px;
    cursor: pointer;
  }
  
  .byPost:hover {
    transform: scale(1.1);
  }
  
  ul{
    margin-top: 20px;
  }
  </style>
  