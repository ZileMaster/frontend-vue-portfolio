<template>
    <div class-name="container mb-3 all-notices">
        <ul v-for="info in notices" :key="info.id" id="notice-board">
            <li class="notice-header"> {{ info.head }} </li>
            <li class="notice-description"> {{ info.description }} </li>
            <div v-if="isAdmin">
              <li><button @click="deleteNotice(info.id)" >Delete notice</button></li>
            </div>
        </ul>
    </div>
  </template>
  
  <script>
    import axios from "axios";

    export default{
        props:["endpoint"],
        data() {
            return {
                notices: [],
            };
        }, 
        mounted() {
            axios
                .get(this.endpoint)
                .then((response) => this.notices = response.data.reverse())
                .catch((error) => console.log(error));
        },
        computed:{
          isAdmin(){
            const userInfo = JSON.parse(localStorage.getItem("user-info"));
            if(userInfo && userInfo.admin)
              return true;
            else
              return false;
          },
        },
        methods: {
          async deleteNotice(id){
            const config = {
              headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem("user-info")).token}` }
            };
            axios.delete(`https://frozen-lowlands-12731.herokuapp.com/api/notice_boards/1/infos/${id}`, 
              config).then((response) => { console.log(response) })
              .catch((error) => {console.warn(error)});
          }
        }
    };
  </script>
  
  <style>
  body {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    line-height: 1.6;
    background-color: #e8e8e8;
  }

  #notice-board {
    width: 50%;
    margin: 0 auto;
    padding: 20px;
    background-color: lightgray;
    border-radius: 10px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .notice-header {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .notice-description {
    font-size: 18px;
    color: gray;
    line-height: 1.5;
  }

  .all-notices{
    display: flex;
    flex-direction: column-reverse;
  }

  </style>
  