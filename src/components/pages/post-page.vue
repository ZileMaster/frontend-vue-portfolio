<template>
  <div>
    <div class="post-card-container" style="height: auto;">
      <div class="post-container">
        <h2 class="post-headline" @mouseover="headlineHover" @mouseleave="headlineLeave">{{ headline }}</h2>
        <p class="post-topic" :class="{ 'hover': hoverTopic }" @mouseover="topicHover" @mouseleave="topicLeave">Topic: {{ topic }}</p>
        <p class="post-description">{{ text }}</p>
      </div>
      <div class="post-actions">
        <div class="post-likes" @click="animateLike">
          <i class="fa fa-thumbs-up"></i> {{ likes }} Likes
        </div>
        <div v-if="isAdmin" class="buttons-for-admin">  
          <button class="btn-mod">Modify</button>
          <button class="btn-del">Delete</button>
        </div>
      </div>
    </div>
    <div class="comment-section">
      <CommentSection :comments="comments"/> 
    </div>
  </div>
</template>

<script>
  import CommentSection from "@/components/CommentSection.vue";

export default {
    props: ["headline", "topic", "likes", "description", "text", "comments"],
    data() {
        return {
            hoverHeadline: false,
            hoverTopic: false,
            CommentSection
        };
    },
    methods: {
        headlineHover() {
            this.hoverHeadline = true;
        },
        headlineLeave() {
            this.hoverHeadline = false;
        },
        topicHover() {
            this.hoverTopic = true;
        },
        topicLeave() {
            this.hoverTopic = false;
        },
        animateLike() {
            const likeButton = this.$el.querySelector(".post-likes");
            if (likeButton) {
                likeButton.classList.add("animate");
                setTimeout(() => {
                    likeButton.classList.remove("animate");
                }, 500);
            }
        },
    },
    computed: {
      isAdmin() {
        const userInfo = JSON.parse(localStorage.getItem("user-info"));
        return userInfo && userInfo.admin !== undefined;
      }
    },
    components: { CommentSection }
}
</script>

<style scoped>

html {
  height:100%;
}

body {
  margin:0;
}

.post-card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(250, 250, 250, 0.9);
  padding: 1.5rem;
  opacity: .9;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #ccc;
  width: 80%;
  margin: 2rem auto;
  animation: change-border-color 5s ease-in-out infinite alternate;
}

.post-actions {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.buttons-for-admin {
  display: flex;
  justify-content: space-between;
  width: 40%;
}

.comment-section{
  display: flex;
  flex-direction: column;
}

@keyframes change-border-color {
  0% {
    border: 3px solid hsl(0, 100%, 50%);
  }
  10% {
    border: 3px solid hsl(120, 100%, 50%);
  }
  20% {
    border: 3px solid hsl(240, 100%, 50%);
  }
  30% {
    border: 3px solid rgb(255, 165, 0);
  }
  40% {
    border: 3px solid rgb(0, 128, 0);
  }
  50% {
    border: 3px solid rgb(0, 0, 255);
  }
  60% {
    border: 3px solid rgb(75, 0, 130);
  }
  70% {
    border: 3px solid rgb(238, 130, 238);
  }
  80% {
    border: 3px solid rgb(255, 192, 203);
  }
  90% {
    border: 3px solid rgb(255, 99, 71);
  }
  100% {
    border: 3px solid rgb(190, 25, 196);
  }
}

.post-container {
  width: 100%;
}

.post-headline {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  transition: all 0.2s ease-in-out;
  transform: translateY(0);
}

.post-card-container:hover .post-headline {
  transform: translateY(-3px);
}

.post-topic {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1rem;
  transition: all 0.2s ease-in-out;
  box-shadow: none;
}
.post-description {
  font-size: 1.2rem;
  line-height: 1.5;
  color: #333;
  transition: all 0.2s ease-in-out;
}

.post-card-container:hover .post-description {
  transform: translateY(-3px);
}

.post-likes {
  font-size: 1.2rem;
  color: #555;
  padding: 0.5rem 1rem;
  background-color: #fafafa;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #ccc;
  margin-left: 1rem;
  transition: all 0.5s ease-in-out;
  position: relative;
}

.post-likes.animate {
  transform: scale(1.1);
}

.post-likes i {
  margin-right: 0.5rem;
}

.post-topic.hover {
  transform: translateY(-3px);
}

.btn-mod{
  background: linear-gradient(to bottom right, #23a2f7, #00536d);
    border: 0;
    border-radius: 12px;
    margin-bottom: 15px;
    margin-left: 10%;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 2.5;
    outline: transparent;
    padding: 0 1rem;
    text-align: center;
    text-decoration: none;
    transition: box-shadow .2s ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
}

.btn-mod, .btn-del:not([disabled]):focus {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(36, 122, 2, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}

.btn-mod, .btn-del:not([disabled]):hover {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(58, 255, 40, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}

.btn-del{
  background: linear-gradient(to bottom right, #ff584c, #661602);
    border: 0;
    border-radius: 12px;
    margin-bottom: 15px;
    margin-left: 10%;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 2.5;
    outline: transparent;
    padding: 0 1rem;
    text-align: center;
    text-decoration: none;
    transition: box-shadow .2s ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
}

</style>