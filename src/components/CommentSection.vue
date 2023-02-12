<template>
    <div class="comments">
      <h3 style="margin-left: 5%; margin-top: 3%; color: brown;">Comment Section</h3>
      <div class="post-comment">
        <form @submit.prevent="submitComment">
            <div class="form-group">
            <input type="text" placeholder="Headline" id="headline" class="comment-headline cool-input" v-model="headline" required/>
            </div>
            <div class="form-group">
            <textarea placeholder="Comment" id="description" class="comment-text cool-input" v-model="description" required></textarea>
            </div>
            <button type="submit" class="submit-btn">Post Comment</button>
        </form>
      </div>
      <hr />
      <div v-if="comments[0]">
        <div class="comment" v-for="comment in comments" :key="comment.id">
            <h4 class="comment-head">{{ comment.headline }}</h4>
            <p class="comment-desc">{{ comment.description }}</p>
            <p class="author" id="comUser">~ by {{ getUsername(comment.user_id) }}</p>
        </div>
      </div>
      <div v-else>
        <p style="margin-left: 10%; font-size: large;"> Be the first to comment!</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios"; 

  export default {
    name: "CommentSection",
    props: {
      comments: Array,
      topic: String, 
      id: Number
    },
    data() {
      return {
        user_id: "",
        headline: "",
        description: "",
        usernames: {}
      };
    },
    methods: {
        async getUsername(user_id){
          if (!this.usernames[user_id]) {
            
            let username = await axios
              .get(`https://frozen-lowlands-12731.herokuapp.com/api/user/${user_id}`)
              .then((response) => response.data.user.username)
              .catch((error) => console.error(error));
            console.log(user_id, username);
            return username.toString();
      }
      console.log(this.usernames)

      return username;
    },
      async submitComment() {
        
        if(JSON.parse(localStorage.getItem("user-info")).user != null){
        this.userId = JSON.parse(localStorage.getItem("user-info")).user.id;
        this.token = JSON.parse(localStorage.getItem("user-info")).token;
        }else{
          alert("You are not loged in!");
        }

        const config = {
                headers: { 'Authorization': `Bearer ${this.token}` }
            };

        const comment = {
          komentar:{
            user_id: this.userId,
            headline: this.headline,
            description: this.description,
            rating: 0, 
            post_id: this.id,
          }
        };
        console.log(comment);
        await axios.post(`https://frozen-lowlands-12731.herokuapp.com/api/komentars`, comment, config)
          .then(response => console.log(response))
          .catch(error => console.log(error));
      },
    },
    
};
</script>

<style>
.author{
    margin-left: 5%;
    color: rgb(182, 181, 181);
}

.comment-head{
    margin-left: 5%;
    text-decoration: underline darkgreen;
    font-weight: 400;
}

.comment-desc{
    margin-left: 5%;
    text-overflow: clip;
}

.comments{
    box-shadow: 0 0 5px 1px lightgrey;
    margin-left: 10%;
    margin-right: 10%;
    background-color: antiquewhite;
    text-align: left;
}

.comment{
    box-shadow: 0 0 5px 1px lightgrey;
    margin-left: 10%;
    margin-right: 10%;
    background-color: aliceblue;
    margin-bottom: 5px;
}

.post-comment{
    border-radius: 5%;
    box-shadow: 0 0 5px 1px lightgrey;
    margin-left: 10%;
    margin-right: 10%;
    background-color: aliceblue;
    text-align: left;
}
.comment-headline{ 
    margin-left: 10%;
    margin-top: 10px;
}

.comment-text{
    margin-left: 10%;
    width: 100px;
    overflow: hidden;
}

.cool-input:hover, .cool-input:focus{
	border-color: #C9C9C9; 
    -webkit-box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 8px; 
  } 

.cool-input {
    padding: 9px; 
	border: solid 1px #E5E5E5; 
	outline: 0; 
	font: normal 13px/100% Verdana, Tahoma, sans-serif; 
	background: #FFFFFF;
    box-shadow: rgba(0,0,0, 0.1) 0px 0px 8px; 
	-moz-box-shadow: rgba(0,0,0, 0.1) 0px 0px 8px; 
	-webkit-box-shadow: rgba(0,0,0, 0.1) 0px 0px 8px; 
    background: -webkit-gradient(linear, left top, left 25, from(#FFFFFF), color-stop(4%, #EEEEEE), to(#FFFFFF)); 
	background: -moz-linear-gradient(top, #FFFFFF, #EEEEEE 1px, #FFFFFF 25px); 
  }

  .submit-btn {
    background: linear-gradient(to bottom right, #6afa17, #0a6602);
    border: 0;
    border-radius: 12px;
    margin-bottom: 15px;
    margin-left: 10%;
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

.submit-btn:not([disabled]):focus {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(36, 122, 2, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}

.submit-btn:not([disabled]):hover {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(58, 255, 40, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}
  @media (max-width: 770px) {
    .comment-text{
        width: 100px;
        height: 40px;
    }
  }
</style>