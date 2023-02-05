<template>
    <div class="about-me-container">
    <div class="left-section" :style="leftSectionStyles">
      <img class="profile-picture" src="../../assets/profilePhoto.jpg" alt="Profile Picture">
      <h2 class="name">{{ name }}</h2>
      <p class="profession">{{ profession }}</p>
    </div>
    <div class="right-section" :style="rightSectionStyles">
      <h2 class="about-me-title">About Me</h2>
      <p class="about-me-text">{{ aboutMe }}</p>
      <div class="button-container">
        <a class="button" href="https://github.com/ZileMaster"><i class="fa-brands fa-github"></i></a>
        <a class="button" href="https://www.linkedin.com/in/aleksa-zivkovic-3b5b10229/"><i class="fa-brands fa-linkedin"></i></a>
        <a class="button" href="https://www.instagram.com/zile_photos/"><i class="fa-brands fa-instagram"></i></a>
      </div>
    </div>
  </div>
  </template>
  
  <script>

export default{
    data() {
    return {
      name: "Aleksa Živković",
      profession: "Javascript Developer",
      aboutMe: "I am the third year student of the college of Computing in Belgrade, and this is my Portfolio site and at the same time project for the subject of Script Languages. "+
       "Here i have been trying out new things and seeing how good it will all go, that's why it's so random and so full other aspects on every page. " + 
       " This is my first serious Vue application and i think it's going fairly well, running with the backend on Rails and power with Axios and Vuex it should be a smooth site once it get's hosted. " +
       "I have a solid understanding ov Javascript, Java, SQL, how the backend and frontend works and i hope i proved it here on the site, im trying to have a keen eye for design, though this site is all over the place." +
       " I have been into programming for many years now, and on the github bellow you can check out some of my projects, those are just what i've been doing since summer 2022(actively) and there is much more before that, but the most serious I have been was from 2022 to later."+
       " Hope you like the site I made reader!"
    }
  },
  computed: {
        leftSectionStyles() {
        return {
            backgroundColor: "#F5F5F5",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
        }
        },
        rightSectionStyles() {
        return {
            backgroundColor: "#FFFFFF",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
        }
        }
    }
};

</script>

<style>
.about-me-container {
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #E0E0E0;
}

.left-section {
  text-align: center;
  width: 70%;
  border-radius: 5%;
  margin-left: 5%;
  height: 100%;
  margin-right: 3%;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.4);
  margin-bottom: 25px;
}

.right-section {
    margin-top: 3%;
    margin-bottom: 3%;
  padding: 20px;
  height: 80%;
  width: 100%;
}

.profile-picture {
  margin-top: 15%;
  border-radius: 15%;
  width: 250px;
  height: 350px;
  object-fit: cover;
  box-shadow: 0 0 50px #ccc;
  transition: all 0.3s ease-in-out;
}

.name {
  font-size: 36px;
  margin-top: 20px;
}

.profession {
  font-size: 24px;
  color: gray;
}

.about-me-title {
  font-size: 36px;
  margin-top: 40px;
}

.about-me-text {
  font-size: 18px;
  line-height: 1.5;
  margin-top: 20px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.button {
  padding: 10px 20px;
  background-color: #023658;
  color: #FFFFFF;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  text-decoration: solid;
  cursor: pointer;
  box-shadow: 0 3px 10px rgb(0 0 0 0.2 0.5);
}

@media (max-width: 767px) {
  .about-me-container {
    flex-direction: column;
  }
  
  .left-section, .right-section {
    width: 80%;
    height: 50%;
    transition: all 0.3s ease-in-out;
  }
 
  .left-section{
    margin-top: 3%;
    margin-left: 10px;
  }
 
  .right-section {
    margin-top: 20px;
  }

  .right-section {
    margin-top: 20px;
  }
}

.profile-picture:hover {
    border-radius: 30%;
  transform: translateY(-15px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
}

.button:hover {
  border-radius: 15px;
  transform: translateY(-15px);
  transition: all 0.3s ease-in-out;
}


.button:focus { 
    background-color: #065081;
    color:black;
}
</style>
