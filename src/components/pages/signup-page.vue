<template>
    <div className="preform">
          <form>
             <div class="signup-block">
              <h2 class="text-center mb-4">Sign Up</h2>
              <input type="text" v-model="username" id="username" placeholder="Username" required />
              <input type="email" v-model="email" id="email" placeholder="Email" required/>
              <input type="password" v-model="password" id="password" placeholder="Password" required />
              <input type="password" v-model="passwordConfirmation" id="password2" placeholder="Confirm Password" required />
              <input type="text" v-model="name" id="name" placeholder="First Name" required />
              <input type="text" v-model="lastname" id="lastName" placeholder="Last name" required />
            <button type="submit" v-on:click="submitForm">
              Sign Up
            </button>
            </div>
          </form>
          <div className="text-center mt-4">
            Already have an account? <router-link to="/login">Login</router-link>
          </div>
    </div> 
</template>

<script>

import ax from 'axios';

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      username: "", 
      lastname: "",
    };
  },
  methods: {
    async submitForm() {
      console.warn("signup", this.name, this.email, this.password);
      if (this.password !== this.passwordConfirmation) {
        alert("Passwords do not match");
        return;
      }else if (this.password.length < 8){
        alert("Password too short");
        return;
      }

      let result = await ax.post("https://frozen-lowlands-12731.herokuapp.com/api/register/users", 
      {
        user: {
          username: this.username, 
          password: this.password, 
          first_name: this.name, 
          last_name: this.lastname, 
          email: this.email, 
          admin_id: 2,
        }
      });
      
      console.warn(result);
      if(result.status == 200)
      {
        alert("sign up successful!");
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({name: 'dashboard' });
        this.location.reload();
      }
      if(result.status == 400){
        alert("unable to make user!");
      }
    },
  },

  mounted()
  {
    let user = localStorage.getItem('user-info');
    if (user){
      this.$router.push({name: 'dashboard' })
    }
  }
};
</script>

<style>

form{
  margin-top: 20%;
}
  .preform{
    justify-content: center;
    height: 83vh;
  }

  .signup-block {
    width: 70%;
    max-width: 600px;
    min-width: 250px;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    border-top: 5px solid #ff656c;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
}

.signup-block h2 {
    text-align: center;
    color: #000;
    font-size: 35px;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 20px;
}

.signup-block input {
    width: 100%;
    height: 42px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    font-size: 14px;
    font-family: Montserrat;
    padding: 0 20px 0 50px;
    outline: none;
}

.signup-block input#username, input#name, input#lastName, input#email {
    background: #fff url('http://i.imgur.com/u0XmBmv.png') 20px top no-repeat;
    background-size: 16px 80px;
}

.signup-block input#username, input#name, input#lastName, input#email, input#password, input#password2 :focus {
    background: #fff url('http://i.imgur.com/u0XmBmv.png') 20px bottom no-repeat;
    background-size: 16px 80px;
}

.signup-block input#password, input#password2 {
    background: #fff url('http://i.imgur.com/Qf83FTt.png') 20px top no-repeat;
    background-size: 16px 80px;
}

.signup-block input#password, input#password2 :focus{
    background: #fff url('http://i.imgur.com/Qf83FTt.png') 20px bottom no-repeat;
    background-size: 16px 80px;
}

.signup-block input:active, .signup-block input:focus {
    border: 1px solid #ff656c;
}

.signup-block button {
    width: 100%;
    height: 40px;
    background: #ff656c;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #e15960;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;
    font-family: Montserrat;
    outline: none;
    cursor: pointer;
}

.signup-block button:hover {
    background: #ff7b81;
}

input[type="checkbox"] {
    width: 16px;
    height: 16px;
    margin-right: 8px;
}

label.form-check-label {
    font-size: 14px;
    margin-left: 8px;
    display: inline-block;
    vertical-align: middle;
}

</style> 
