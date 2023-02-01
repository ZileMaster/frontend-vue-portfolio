

<template>
    <div class="home">
      <PostPage 
        :headline="headline" 
        :description="description" 
        :likes="likes" 
        :topic="topic"
      />
    </div>
  </template>
  
  <script>
    import PostPage from "@/components/pages/post-page.vue";
  
    export default {
      name: "Post",
      data() {
        return {
        headline: this.$route.params.headline,
        description: this.$route.params.description,
        topic: this.$route.params.topic,
        likes: this.$route.params.likes,
        };
    },
      components: {
        PostPage,
      },
      mounted(){
        console.log(this.headline, this.description, this.likes, this.topic);
      }
    };
  </script>