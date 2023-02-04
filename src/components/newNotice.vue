<template>
    <div class="new-post">
      <form>
        <div class="form-group">
          <input type="text" id="headline" v-model="headline" placeholder="Headline" class="cool-input" required/>
        </div>
        <div class="form-group">
          <input type="text" id="description" v-model="description" placeholder="Description" class="cool-input" required/>
        </div>
        <div class="btnSubm glow">
            <a v-on:click="submitNotice" class="glow">
                <i class="fa-solid fa-square-check fa-4x icon-success fa-beat fa-bounce glow" ></i>
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
      };
    }, 
    methods: {
      async submitNotice(){
        this.token = JSON.parse(localStorage.getItem("user-info")).token;
            const config = {
                headers: { 'Authorization': `Bearer ${this.token}` }
            };

        await axios.post("http://localhost:3000/api/admins/3/notice_boards/1/infos", 
            {
              "info":{
                "notice_board_id": 1, 
                "head": this.headline, 
                "description": this.description 
              } 
            }, 
            config
        ).then( response => console.log(response)
        ).catch(error => console.log(error))
      }
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

  .btnSubm{
    margin-top: 20px;
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

  #description{
    min-width: 400px;
    min-height: 50px;
  }

  #headline{ 
    min-width: 200px;
    max-width: 40%;
  }

  .icon-success{
    margin-bottom: 10px;
    color: green;
  }
</style>