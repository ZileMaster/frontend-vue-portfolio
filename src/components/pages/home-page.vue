<template>
  <div class-name="container">
    <h3>Home page!</h3>
    <NoticeBoard endpoint="http://localhost:3000/api/notice_boards/1/infos" />
  </div>
</template>

<script>
import NoticeBoard from "../NoticeBoard.vue"; 

export default{
  components: {  NoticeBoard  },
};

</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background-color: #e8e8e8;
}

</style>
