<template>
  <div id="app">
    <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/posts">Posts</router-link></li>
        <li v-if="!auth"><router-link to="/signin">Sign In</router-link></li>
        <li v-else><router-link to="/signin">Sign Out</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  import users from './userDB.js'

  export default {
    name: 'app',
    computed: {
      auth(){
        return this.user !== null
      }
    },
    data: () => ({
      user: null,
      users
    }),
    created: function(){
      this.load_user();
    },
    methods: {
      load_user: function(){
        // console.log("s");
        this.user = JSON.parse(localStorage.getItem('user'));
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Comfortaa',cursive;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0 auto;
    margin-top: 60px;
    width: 50%;
    font-size: 20px;
    line-height: 30px;
    cursor: default;
  }

  h1{
    font-weight: 300;
    line-height: 40px;
  }

  ul {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    padding: 0;
  }

  a {
    font-size: 17px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #4b72a7;
    cursor: pointer;
  }
</style>
