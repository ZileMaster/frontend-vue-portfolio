<template>
    <div class="new-post">
      <form>
        <div class="form-group">
          <input type="text" id="username" v-model="username" placeholder="Username" class="cool-input" required/>
        </div>
        <div class="form-group">
          <input type="text" id="email" v-model="email" placeholder="Email" class="cool-input" required/>
        </div>
        <div class="form-group">
          <input type="text" id="first_name" v-model="name" placeholder="First Name" class="cool-input" required/>
        </div>
        <div class="form-group">
          <input type="text" id="last_name" v-model="lastname" placeholder="Last name" class="cool-input" required/>
        </div>
        <div class="form-group">
          <input type="password" id="password" v-model="password" placeholder="Password" class="cool-input" required/>
        </div>
        <div class="form-group">
          <input type="password" id="password_old" v-model="oldPassword" placeholder="Old password" class="cool-input" required/>
        </div>
        <div class="btnSubm glow">
            <a v-on:click="submitUpdate" class="glow">
                <i class="fa-solid fa-square-check fa-4x icon-success fa-beat fa-bounce glow" ></i>
            </a>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";

  export default {
    data() {
      return {
        username: "",
        email: "",
        name: "", 
        lastname: "", 
        password: "", 
        oldPassword: "", 
      };
    }, 
    methods: {
        async submitUpdate(){
            if(!this.oldPassword){
                alert("Incorrect password!");
                return null;
            }

            this.token = JSON.parse(localStorage.getItem("user-info")).token;
            const config = {
                headers: { 'Authorization': `Bearer ${this.token}` }
            };

            await axios.put("http://localhost:3000/api/admins/3", 
                {
                    "user": {
                        "username": this.username, 
                        "email": this.email, 
                        "password": this.password, 
                        "first_name": this.name, 
                        "last_name": this.lastname, 
                    }
                }, 
                config
            ).then( response => (console.log(response))
            ).catch(error => (console.log(error)));
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

  .cool-input {
    padding: 9px; 
	border: solid 1px #E5E5E5; 
    min-width: 300px;
	outline: 0; 
	font: normal 13px/100% Verdana, Tahoma, sans-serif; 
	background: #FFFFFF;
    box-shadow: rgba(0,0,0, 0.1) 0px 0px 8px; 
	-moz-box-shadow: rgba(0,0,0, 0.1) 0px 0px 8px; 
	-webkit-box-shadow: rgba(0,0,0, 0.1) 0px 0px 8px; 
    background: -webkit-gradient(linear, left top, left 25, from(#FFFFFF), color-stop(4%, #EEEEEE), to(#FFFFFF)); 
	background: -moz-linear-gradient(top, #FFFFFF, #EEEEEE 1px, #FFFFFF 25px); 
  }

  .btnSubm{
    margin-top: 35px;
  }

  .glow:hover{
	border-color: #C9C9C9; 
  }

  .icon-success{
	border: solid 1px #E5E5E5; 
    margin-bottom: 10px;
    color: green;
  }
</style>