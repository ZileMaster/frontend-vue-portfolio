<template>
  <div class-name="container">
    <NoticeBoard endpoint="https://frozen-lowlands-12731.herokuapp.com/api/notice_boards/1/infos" />
  </div>
</template>

<script>
import NoticeBoard from "../NoticeBoard.vue"; 

export default{
  components: {  NoticeBoard  },
  mounted(){ 
    if (!localStorage.getItem("visited")){
      alert("Please have understanding that this site is still not the endproduct and it is limited, over time it will be getting more and more stuff. Thank you for your attention!");
      localStorage.setItem("visited", true);
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

</style>
