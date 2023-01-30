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
            />
            <div className="form-group">
            <label for="lastName">Last name</label>
            <input
              type="text"
              v-model="lastname"
              className="form-control"
              id="lastName"
              placeholder="Enter your last name"
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
    submitForm() {
      console.warn("signup", this.name, this.email, this.password);
      if (this.password !== this.passwordConfirmation) {
        alert("Passwords do not match");
        return;
      }
      
    },
  },
};
</script>
Note that this is just an example and you will need to adjust it to your
specific needs and also add some styling.

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
