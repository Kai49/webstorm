<template xmlns="http://www.w3.org/1999/html">

  <div class="hello">
    <h2>Upload</h2>
    <form  enctype="multipart/form-data" id="myForm">
      <input type="text" name="username" >
      <input type="file" name="image" accept="image/*">
      <input type="submit" @click="submitBtn">
    </form>
  </div>

</template>

<script>
    export default {
       data() {
           return {
             uploadFile:''
           }
       },
      methods: {
         submitBtn(){
           // this.axios.post();
           this.$router.replace('/')
         }
      }
    }
</script>

<style scoped>

</style>
