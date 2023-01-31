<template>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">Login</div>
          <div className="card-body">
            <form>
              <div className="form-group row">
                <label
                  for="username"
                  className="col-md-4 col-form-label text-md-right"
                  >Username</label
                >
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="user"
                    v-model="user"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="password"
                  className="col-md-4 col-form-label text-md-right"
                  >Password</label
                >
                <div className="col-md-6">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    v-model="password"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-6 offset-md-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="isAdmin"
                      v-model="isAdmin"
                    />
                    <label className="form-check-label" for="isAdmin"
                      >Is Admin</label
                    >
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-6 offset-md-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="remember"
                      v-model="rememberMe"
                    />
                    <label className="form-check-label" for="remember"
                      >Remember Me</label
                    >
                  </div>
                </div>
              </div>
              <div className="form-group row mb-0">
                <div className="col-md-8 offset-md-4">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    @click="submitForm"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      user: "",
      password: "",
      rememberMe: false,
      isAdmin: false,
    };
  },
  methods: {
    async submitForm() {
      console.warn("useris " + this.user + " " + this.password + " " + this.isAdmin.valueOf);
      let url = "";
      if (this.isAdmin) {
        url = "http://localhost:3000/api/login/admins";
      } else {
        url = "http://localhost:3000/api/login/users";
      }

      let result = await axios
        .post(url, {
          user: {
            username: this.user,
            password: this.password,
          }
        });
        
        console.warn(result);

        if( result.status == 200){
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({name: "dashboard"});
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
