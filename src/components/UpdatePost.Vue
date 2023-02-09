<template>
    <div class="new-post">
      <form>
        <div class="form-group">
          <input type="text" id="headline" v-model="headline" placeholder="Headline" class="cool-input" required/>
        </div>
        <div class="form-group">
          <input type="text" id="description" v-model="description" placeholder="Description" class="cool-input" required/>
        </div>
        <div class="form-group">
          <textarea id="text" v-model="text" class="cool-input" required placeholder="Enter post text"></textarea>
        </div>
        <div class="form-group">
          <select id="topic" v-model="selectedTopic" class="cool-input" required>
            <option value="travel">Travel</option>
            <option value="project">Project</option>
            <option value="personal">Personal</option>
          </select>
        </div>
        <div class="btnSubm glow">
            <a v-on:click="updatePost" class="glow">
                <i class="fa-solid fa-square-check fa-4x icon-success glow fa-flip" style="--fa-animation-duration: 3s;"></i>
            </a>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        headline: "",
        description: "",
        text: "",
        selectedTopic: "travel"
      };
    }, 
    methods: {
        async updatePost(){
        this.token = JSON.parse(localStorage.getItem("user-info")).token;
            const config = {
                headers: { 'Authorization': `Bearer ${this.token}` }
            };
        if(this.selectedTopic === "project"){
            await axios.put("https://frozen-lowlands-12731.herokuapp.com/api/project_pages", 
                {
                "post":{
                    "headline": this.headline, 
                    "description": this.description, 
                    "text": this.text,
                    "project_page_id": 2,
                    "travel_blog_id": 2, 
                    "personal_blog_id": 2,
                    "likes": 0, 
                    "topic": "project"
                } 
                }, 
                config
            ).then( response => console.log(response)
            ).catch(error => console.log(error))
        }
        else
            await axios.put(`https://frozen-lowlands-12731.herokuapp.com/api/${this.selectedTopic}_blogs`, 
            {
                "post":{
                        "headline": this.headline, 
                        "description": this.description, 
                        "text": this.text,
                        "project_page_id": 2,
                        "travel_blog_id": 2, 
                        "personal_blog_id": 2,
                        "likes": 0, 
                        "topic": this.selectedTopic
                    } 
                }, 
                config
            ).then( response => console.log(response)
            ).catch(error => console.log(error))
      }
    }
  };
  </script>

  <style scoped>
  .form-group {
    margin-top: 10px;
    border-radius: 15px;
  }

  .cool-input:hover, .cool-input:focus{
	border-color: #C9C9C9; 
    -webkit-box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 8px; 
  } 

  .btnSubm{
    margin-top: 10px;
  }

  .glow:hover{
	border-color: #C9C9C9; 
  }

  .cool-input {
    padding: 9px; 
	border: solid 1px #E5E5E5; 
	outline: 0; 
	font: normal 13px/100% Verdana, Tahoma, sans-serif; 
	background: #FFFFFF;
    box-shadow: rgba(0,0,0, 0.1) 0px 0px 8px; 
	-moz-box-shadow: rgba(0,0,0, 0.1) 0px 0px 8px; 
	-webkit-box-shadow: rgba(0,0,0, 0.1) 0px 0px 8px; 
    background: -webkit-gradient(linear, left top, left 25, from(#FFFFFF), color-stop(4%, #EEEEEE), to(#FFFFFF)); 
	background: -moz-linear-gradient(top, #FFFFFF, #EEEEEE 1px, #FFFFFF 25px); 
  }

  #text {
    min-width: 400px;
    width: 70%;
    min-height: 150px;
    height: 50%;
  }

  #description{
    min-width: 300px;
  }

  .icon-success{
    margin-bottom: 10px;
    color: green;
  }
</style>