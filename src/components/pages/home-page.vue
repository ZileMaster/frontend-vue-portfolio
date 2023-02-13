<template>
  <div class-name="container">
    <HeroSection class="hero-container">
      <h1> Home page </h1>
    </HeroSection>
      <transition name="slide-fade">
        <div class="notices" :style="noticesStyles">
          <div class="noticesButton" @click="toggleNotices" style="cursor: pointer;">
            <h5>
              <span
                class="collapse-icon"
                :class="collapseClass"
              >
                <i class="fas fa-angle-double-up" />
              </span>
              Notices
            </h5>
          </div>
          <div class="notices-background">
            <NoticeBoard endpoint="https://frozen-lowlands-12731.herokuapp.com/api/notice_boards/1/infos" v-if="showNotices"/>
          </div>
        </div>
    </transition>
    <div class="home-content">
      <div>
        <p> This site has </p>
        <h1 id="count">0</h1>
        <p>Views</p>
      </div>
      <div>
        <h1>These are the latest posts by every topic</h1>
        <div class="home-cards">
          <Post endpoint="https://frozen-lowlands-12731.herokuapp.com/api/project_pages" />
          <Post endpoint="https://frozen-lowlands-12731.herokuapp.com/api/travel_blogs" />
          <Post endpoint="https://frozen-lowlands-12731.herokuapp.com/api/personal_blogs" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroSection from "../HeroSection.vue";
import NoticeBoard from "../NoticeBoard.vue"; 
import Post from "../LatestPosts.vue";


export default{
  components: { NoticeBoard, HeroSection, Post },
  data(){
    return{
      showNotices: false,
    };
  },
  computed: {
    noticesStyles() {
      return this.showNotices
        ? { width: "25%", height: "60%", overflow: "scroll", }
        : { width: "15%", height: "3%", };
    },
    collapseClass(){
      return this.showNotices 
      ? { transform: "rotate(180deg)", transition: "0.2s linear"}
      : null
    }
  },
  mounted(){ 
    const countEl = document.getElementById('count');

    this.updateVisitCount(countEl);

    if (!localStorage.getItem("visited")){
      alert("Please have understanding that this site is still not the endproduct and it is limited, over time it will be getting more and more stuff. Thank you for your attention!");
      localStorage.setItem("visited", true);
    }
  }, 
  methods: {
    toggleNotices(){ 
      this.showNotices = !this.showNotices;
    }, 
    updateVisitCount(countEl){
      fetch('https://api.countapi.xyz/update/rails-front/viewforfront/?amount=1')
        .then(res => res.json())
        .then(res => {
          countEl.innerHTML = res.value;
        })
    }
  }
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background-color: #e8e8e8;
}

.notices{
  position: fixed;
  bottom: 0;
  left: 75%;
  transition: width 0.3s, height 0.3s;
  background-color: bisque;
  border-top-left-radius: 4%;
  border-top-right-radius: 4%;
}

.notices > .noticesButton{
  background-color: crimson;
  color: antiquewhite;
  border-top-left-radius: 8%;
  border-top-right-radius: 8%;
}

.collapse-icon {
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}

@media (max-width: 900px) {
  .notices {
    min-width: 200px;
  }
}
</style>

<style scoped>
.hero-container{
  background-image: url(@/assets/DALL·E\ 2023-02-07\ 21.36.17\ -\ medieval\ serbia\ cool\ landscape\ oil\ painting\ for\ background.png);
  background-repeat: no-repeat;
  background-size: cover;
}

@media (max-width: 900px) {
  .notices {
    left: 0%;
    min-width: 300px;
  }
}

h1 {
	font-size: 50px;
	margin: 0;
}

p {
	color: rgba(54, 46, 126, 0.8);
	letter-spacing: 2px;
	margin: 0;
  font-size: 25px;
}

.home-cards {
  display: flex;
  flex-wrap: wrap;
}

.home-cards > * {
  flex: 1 1 33%;
  margin: 10px;
}

.home-cards > :first-child {
  order: -1;
}

@media (max-width: 995px) {
  .home-cards {
    flex-direction: column;
  }
}

.home-content{
  display: flex;
  flex-direction: column;
  gap: -10px;
  column-gap: 15px;
}

</style>