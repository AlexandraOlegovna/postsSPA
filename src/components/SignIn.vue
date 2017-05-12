<template>
    <div id="signin">
      <div class="field"><label> Username</label> <input></div>
      <div class="field"><label> Password</label> <input></div>
    </div>
</template>

<script>
  export default {
    name: 'signin'
  }
</script>

<style scoped>
  #id{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .field{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /*margin: 10px;*/
  }

  input{
    margin: 10px;
    font-size: 20px;
    /*line-height: 30px;*/
  }

</style>
