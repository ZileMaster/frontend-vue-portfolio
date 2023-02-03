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
        <a>
            <i class="fa-solid fa-square-check fa-4x icon-success" ></i>
        </a>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        headline: "",
        description: "",
        text: "",
        selectedTopic: "travel"
      };
    }
  };
  </script>

  <style>
  .form-group {
    margin-top: 10px;
    border-radius: 15px;
  }

  .cool-input:hover, .cool-input:focus{
	border-color: #C9C9C9; 
    -webkit-box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 8px; 
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
    min-height: 200px;
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