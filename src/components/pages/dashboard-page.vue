<template>
  <div class-name="container">
    <h3>Dashboard page!</h3>
    <div className="welcome">
      <h3>Welcome <b>{{ name }} {{ lastname }}</b>!</h3>
      <div v-if="isAdmin">
        <div>
          <p><b>What would you like to do now?</b></p> 
          <div class="d-flex justify-content-center">
            <div class="d-flex flex-column">
              <div class="mb-3">
                <button class=" btn-1" @click="() => ToggleModal('postTrigger')">New Post</button>
              </div>
              <div class="d-flex">
                <div class="mb-3 mr-3">
                  <button class="btn btn-2" @click="() => ToggleModal('noticeTrigger')"><b><i> New Notice </i></b></button>
                </div>
                <div class="mb-3">
                  <button class="btn btn-3" @click="() => ToggleModal('updateTrigger')"><b> Update Account </b></button>
                </div>
              </div>
            </div>   
            <Modal v-if="modalTriggers.postTrigger" :ToggleModal=" () => ToggleModal('postTrigger')">
              <div class="modal-content">
                <NewPost />
              </div>
            </Modal>
            <Modal v-if="modalTriggers.noticeTrigger" :ToggleModal=" () => ToggleModal('noticeTrigger')">
              <div class="modal-content">
                <NewNotice />
              </div>
            </Modal>
            <Modal v-if="modalTriggers.updateTrigger" :ToggleModal=" () => ToggleModal('updateTrigger')">
              <div class="modal-content">
                <UpdateAdmin />
              </div>
            </Modal>
          </div>  
        </div>
        <button @click="toggleTable" class="toggleButton">Toggle Table</button>
        <div v-if="showTable" >
          <h3 class="text-center">User List</h3>
            <div class="d-flex justify-content-center align-items-center mb-3" v-show="showTable">
              <div class="card w-75">
                <table class="table table-striped table-responsive">
                  <thead>
                    <tr>
                      <th scope="col">Username</th>
                      <th scope="col">Email</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="user in users" :key="user.id">
                      <td>{{ user.username }}</td>
                      <td>{{ user.email }}</td>
                      <td>{{ user.first_name }}</td>
                      <td>{{ user.last_name }}</td>
                      <td>
                        <button class="btn btn-danger" @click="deleteUser(user.id)">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>  
        </div>
      <div v-if="!isAdmin" >
        <div>
          <p><b>What would you like to do now?</b></p> 
          <div class="d-flex justify-content-center">
            <div class="d-flex flex-column">
              <div class="d-flex">
                <div class="mb-3 mr-3">
                  <button class="btn btn-2" @click="deleteAccount"><b><i> Delete the account </i></b></button>
                </div>
                <div class="mb-3">
                  <button class="btn btn-3" @click="() => ToggleModal('updateUserTrigger')"><b> Update Account </b></button>
                </div>
              </div>
            </div>   
            <Modal v-if="modalTriggers.updateUserTrigger" :ToggleModal=" () => ToggleModal('updateUserTrigger')">
              <div class="modal-content">
                <UpdateUser />
              </div>
            </Modal>
          </div>  
        </div>
        <button @click="toggleComments" class="toggleButton">Toggle All comments</button>
        <div v-if="showComments">
          <p>comments showing</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import NewPost from "../NewPost.vue";
import Modal from "../Modal.vue";
import { ref } from "vue";
import NewNotice from '../newNotice.vue';
import UpdateAdmin from '../UpdateAdmin.vue'
import UpdateUser from '../UpdateUser.vue';
import CommentSection from '../CommentSection.vue';

  export default{
    components: {
      NewPost, 
      Modal, 
      NewNotice,
      UpdateAdmin, 
      UpdateUser, 
      CommentSection,
    },
    setup(){
      const modalTriggers = ref({
        postTrigger: false, 
        noticeTrigger: false,
        updateTrigger: false, 
        updateUserTrigger:false
      })

      const ToggleModal = (trigger) => {
        modalTriggers.value[trigger] = !modalTriggers.value[trigger]
      }

      return {
        Modal, 
        modalTriggers, 
        ToggleModal
      }
    },
    data(){
      return{
        name: "", 
        lastname: "",
        token: "",
        users: [],
        showTable: false,
        showComments: false, 
        CommentSection
      };
    },
    computed: {
      isAdmin(){
        const userInfo = JSON.parse(localStorage.getItem("user-info"));
        return userInfo.admin !== undefined;
      },
    },
    mounted(){
      if(JSON.parse(localStorage.getItem("user-info")).user != null){
        this.name = JSON.parse(localStorage.getItem("user-info")).user.first_name;
        this.lastname = JSON.parse(localStorage.getItem("user-info")).user.last_name;
        this.token = JSON.parse(localStorage.getItem("user-info")).token;
      }else if(JSON.parse(localStorage.getItem("user-info")).admin != null){
        this.name = JSON.parse(localStorage.getItem("user-info")).admin.first_name;
        this.lastname = JSON.parse(localStorage.getItem("user-info")).admin.last_name;
        this.token = JSON.parse(localStorage.getItem("user-info")).token;
      }else{
        this.$router.push('signup');
      }
        
      const config = {
        headers: { 'Authorization': `Bearer ${this.token}` }
      };

      axios 
        .get("https://frozen-lowlands-12731.herokuapp.com/api/users", config)
        .then((response) => (this.users = response.data))
        .catch((error) => { console.error(error) });
      }, 
      methods: {
        toggleTable() {
          this.showTable = !this.showTable;
        }, 
        toggleComments() {
          this.showComments = !this.showComments;
        },
        deleteUser(id){
          const config = {
            headers: { 'Authorization': `Bearer ${this.token}` }
          };

          axios.delete(`https://frozen-lowlands-12731.herokuapp.com/api/users/${id}`, config)
          .then((response) => console.log(response))
          .catch((error) => (console.warn(error)));
        }
      },  
  }
</script>

<style>

.welcome{
    box-shadow: 0 0 5px 1px lightgrey;
    margin-left: 10%;
    margin-right: 10%;
    background-color: antiquewhite;
    text-align: left;
    padding-inline: 40px;
}

.toggleButton{
  background: linear-gradient(to bottom right, #EF4765, #FF9A5A);
  border: 0;
  border-radius: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
} 
.toggleButton:not([disabled]):focus {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}

.toggleButton:not([disabled]):hover {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}

body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background-color: #e8e8e8;
}

.modal-content {
  display: flex;
  flex-direction: column;

}

.container {
  max-width: 90%;
  margin: 0 auto;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 100%;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 35px;
  margin-bottom: 10px;
}

th {
  background-color: #333;
  color: rgb(165, 24, 24);
  padding: 10px;
  text-align: left;
}

td {
  border: 1px solid #333;
  padding: 10px;
  width: auto;
}

tr:nth-child(even) {
  background-color: #eee;
}

.welcome {
  margin-top: 20px;
  font-size: medium;
}

@media only screen and (max-width: 768px) {
  .card {
    width: auto;
  }
}

.btn-1 {
  margin-top: 20px;
  margin-bottom: 15px;
	width: 150px;
	height: 50px;
	cursor: pointer;
	font-size: 20px;
	font-family: 'Staatliches', cursive;
	letter-spacing: 5px;
	background: #ffc421;
	border: 2px solid black;
	box-shadow: 0px 0px 0px rgba(0,0,0,0.4);
	transition: 500ms;
}

.btn-1:after {
	content: '';
	position: absolute;
	transform: translateX(-55px) translateY(-40px);
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background: transparent;
	box-shadow: 0px 0px 50px transparent;
	transition: 500ms;
}

.btn-1:hover {
	transform: translateY(-5px);
	box-shadow: 0px 10px 10px rgba(0,0,0,0.4);
}

.btn-1:hover:after {
	background: white;
	box-shadow: 0px 0px 20px #ffc421, 0px 0px 30px #ffc421, inset 0px 0px 10px #ffc421;
	animation: spin 1s infinite linear;
}

@keyframes spin{
	25%{transform: translateX(-25px) translateY(-35px);
			width: 15px;
			height: 15px;}
	50% {transform: translateX(-55px) translateY(-30px);
			width: 5px;
			height: 5px;}
	75% {transform: translateX(-85px) translateY(-35px);
			width: 15px;
			height: 15px;}
}

.btn-1:focus {
	outline: none;
}

.btn-2, .btn-3 {
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: transparent;
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  color: #e74c3c;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-self: center;
      -ms-flex-item-align: center;
          align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}

.btn-2{
  border-color: #3498db;
  color: #fff;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
}

.btn-2:hover, .btn-2:focus {
  color: #fff;
  outline: 0;
}
.btn-2:hover {
  box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
}

.btn-3 {
  border-color: #8e44ad;
  border-radius: 0;
  color: #8e44ad;
  position: relative;
  overflow: hidden;
  z-index: 1;
  -webkit-transition: color 150ms ease-in-out;
  transition: color 150ms ease-in-out;
}
.btn-3:after {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  width: 0;
  height: 100%;
  background: #8e44ad;
  z-index: -1;
  -webkit-transition: width 150ms ease-in-out;
  transition: width 150ms ease-in-out;
}
.btn-3:hover {
  color: #fff;
}
.btn-3:hover:after {
  width: 110%;
}
</style>
