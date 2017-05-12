<template>
    <div id="signin">
      <div v-if="!auth">
        <p>Ты можешь залогиниться через </p>
        <a @click="signin_vk"><img src="https://avatanplus.com/files/resources/mid/57d993e5eb5e515729e9ba4c.png"></a>
      </div>
      <div v-else>
        <p>Привет, {{username}}. Теперь ты можешь оценивать посты :) </p>
        <p>Если ты хочешь выйти из учетной записи, то нажимай </p>
        <button @click="signout_vk"> Sign Out </button>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'signin',
    computed: {
      auth(){
        return this.$parent.user !== null
      },
      username(){
        return this.$parent.user.username
      },
      id(){
        return this.$parent.user.id
      }
    },
    methods: {
      signin_vk: function(){
        let users = this.$parent.users;
        self = this;
          VK.Auth.login(function(response) {
          if (response.session) {
            let id = response.session.user.id;
            let username = response.session.user.first_name;
            let cur_user = {
                username: username,
                likes: []
            }
            if (users[id] == null)
              users[id] = cur_user
            self.$parent.user = users[id]}
            localStorage.setItem('user', JSON.stringify(self.$parent.user))
          }, null);
      },
      signout_vk: function(){
        self = this;
        VK.Auth.logout()
        self.$parent.user = null
        localStorage.setItem('user', null)
        // let l = localStorage.getItem('user')
        // console.log(l)
      }
    }
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
  }

  input{
    margin: 10px;
    font-size: 20px;
  }

  img{
    width: 5em;
  }

  button{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 15px;
    background-color: white;
    border: none;
    box-shadow: 0 0 5px 2px #4b72a7;
    /*color: #4b72a7;*/
  }

</style>
