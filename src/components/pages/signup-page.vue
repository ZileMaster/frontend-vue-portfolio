<template>
  <div className="d-flex align-items-center justify-content-center h-100">
    <div className="card w-50">
      <div className="card-body">
        <h4 className="card-title text-center mb-4">Sign Up</h4>
        <form>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label for="password2">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="password2"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
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
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    };
  },
  methods: {
    submitForm() {
      // Perform form validation and submission here
      // Example:
      if (this.password !== this.passwordConfirmation) {
        alert("Passwords do not match");
        return;
      }
      // Make an API call to create the user
      // On success, redirect the user to the login page
      // On failure, show an error message
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
