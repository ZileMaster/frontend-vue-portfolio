<template>
  <div class="bg"></div>
  <div class="bg bg2"></div>
  <div class="bg bg3"></div>
  <div class="post-card-container" style="height: auto;">
    <div class="post-container">
      <h2 class="post-headline" @mouseover="headlineHover" @mouseleave="headlineLeave">{{ headline }}</h2>
      <p class="post-topic" :class="{ 'hover': hoverTopic }" @mouseover="topicHover" @mouseleave="topicLeave">Topic: {{ topic }}</p>
      <p class="post-description">{{ description }}</p>
    </div>
    <div class="post-likes" @click="animateLike">
      <i class="fa fa-thumbs-up"></i> {{ likes }} Likes
    </div>
  </div>
</template>

<script>
export default {
  props: ['headline', 'topic', 'likes', 'description'],
  data() {
    return {
      hoverHeadline: false,
      hoverTopic: false
    }
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
      const likeButton = this.$el.querySelector('.post-likes');
      if (likeButton) {
        likeButton.classList.add('animate');
        setTimeout(() => {
          likeButton.classList.remove('animate');
        }, 500);
      }
    },
  },
}
</script>

<style scoped>

html {
  height:100%;
}

body {
  margin:0;
}

.bg {
  animation:slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
  bottom:0;
  left:-50%;
  opacity:.5;
  position:fixed;
  right:-50%;
  top:0;
  z-index:-1;
}

.bg2 {
  animation-direction:alternate-reverse;
  animation-duration:4s;
}

.bg3 {
  animation-duration:5s;
}

@keyframes slide {
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }
}

.post-card-container {
  display: flex;
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



</style>