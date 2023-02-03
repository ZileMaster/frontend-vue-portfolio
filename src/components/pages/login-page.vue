<template>
          <form>
              <div class="login-block">
                <h1>Login</h1>
                  <input
                    type="text"
                    placeholder="Username"
                    v-model="user"
                    required
                  />
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    v-model="password"
                    required
                  />
                  <div>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="isAdmin"
                      v-model="isAdmin"
                    />
                    <label className="form-check-label" for="isAdmin">
                      Are you admin?
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="remember"
                      v-model="rememberMe"
                    />
                    <label className="form-check-label" for="remember">
                      Remember Me
                    </label>
                  </div>
                  <button
                    type="submit"
                    @click="submitForm"
                  >
                    Login
                  </button>
                </div>
            </form>
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

<style>
  .login-block {
    width: 320px;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    border-top: 5px solid #ff656c;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
}

.login-block h1 {
    text-align: center;
    color: #000;
    font-size: 18px;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 20px;
}

.login-block input {
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

.login-block input#username {
    background: #fff url('http://i.imgur.com/u0XmBmv.png') 20px top no-repeat;
    background-size: 16px 80px;
}

.login-block input#username:focus {
    background: #fff url('http://i.imgur.com/u0XmBmv.png') 20px bottom no-repeat;
    background-size: 16px 80px;
}

.login-block input#password {
    background: #fff url('http://i.imgur.com/Qf83FTt.png') 20px top no-repeat;
    background-size: 16px 80px;
}

.login-block input#password:focus {
    background: #fff url('http://i.imgur.com/Qf83FTt.png') 20px bottom no-repeat;
    background-size: 16px 80px;
}

.login-block input:active, .login-block input:focus {
    border: 1px solid #ff656c;
}

.login-block button {
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

.login-block button:hover {
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

/* body {
  background-color: #e74c3c;
  animation: bg-color 10s infinite;
}
@keyframes bg-color {
  0% { background-color: #e74c3c; }
  20% { background-color: #f1c40f; }
  40% { background-color: #1abc9c; }
  60% { background-color: #3498db; }
  80% { background-color: #9b59b6; }
  100% { background-color: #e74c3c; }
} */

</style>
