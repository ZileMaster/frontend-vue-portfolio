<template>
  <div className="d-flex align-items-center justify-content-center h-100">
    <div className="card w-50">
      <div className="card-body">
        <h4 className="card-title text-center mb-4">Sign Up</h4>
        <form>
          <div className="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              v-model="username"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              v-model="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              v-model="password"
              className="form-control"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group">
            <label for="password2">Confirm Password</label>
            <input
              type="password"
              v-model="passwordConfirmation"
              className="form-control"
              id="password2"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              v-model="name"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              required
            />
            <div className="form-group">
            <label for="lastName">Last name</label>
            <input
              type="text"
              v-model="lastname"
              className="form-control"
              id="lastName"
              placeholder="Enter your last name"
              required
            />
          </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block" v-on:click="submitForm">
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          Already have an account? <router-link to="/login">Login</router-link>
        </div>
      </div>
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

      let result = await ax.post("http://localhost:3000/api/register/users", 
      {
        user: {
          username: this.username, 
          password: this.password, 
          first_name: this.name, 
          last_name: this.lastname, 
          email: this.email, 
          admin_id: 3,
        }
      });
      
      console.warn(result);
      if(result.status == 200)
      {
        alert("sign up successful!");
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({name: 'dashboard' })
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
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.card-body {
  display: flex;
  flex-direction: column;
}
.form-group {
  margin-bottom: 1rem;
}
</style>
