<template>
    <div class-name="container mb-3">
        <ul v-for="info in notices" :key="info.id">
            <li> {{ info.head }} </li>
            <li> {{ info.description }} </li>
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
                .then((response) => this.notices = response.data)
                .catch((error) => console.log(error));
        },

    };
  </script>
  
  <style>
  body {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    line-height: 1.6;
    background-color: #e8e8e8;
  }
  </style>
  