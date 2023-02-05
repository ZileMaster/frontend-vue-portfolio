<template>
  <div class="home">
    <PostPage 
      v-if="post"
      :headline="post.post.headline" 
      :description="post.post.description" 
      :likes="post.post.likes" 
      :topic="post.post.topic"
      :text="post.post.text" 
      :comments="post.comments"
    />
  </div>
</template>


<script>
import PostPage from "@/components/pages/post-page.vue";
import axios from "axios";
export default {
  name: "Post",
  data() {
    return {
      post: null
    };
  },
  computed: {
    id() {
      return this.$store.state.currentPostId;
    }
  },
  components: {
    PostPage,
  },
  mounted(){
    axios.get(`http://localhost:3000/api/posts/${this.id}`)
    .then(response => 
      (this.post = response.data))
    .catch(error => console.log(error));;
  }
}
</script>