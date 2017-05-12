<template>
  <div id="app">

    <ul>
      <li>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
    <router-view></router-view>
    <div v-for="number in [currentSlide]" class="suggestion">
      <h1> {{suggestions[number].title}}</h1>
      <p> {{suggestions[number].post}} </p>
      <p> You should sign in to vote</p>
      <div>
        👍 10  👎 20
      </div>

      <div class="arrows">
        <div @click="prev" > ← </div>
        <div @click="next"> → </div>
      </div>

    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import About from './components/About.vue'


export default {
  name: 'app',
  data: () => ({
    currentSlide: 0,
    suggestions: [{
      title: "My Suggestion",
      post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue risus turpis, sed facilisis ex efficitur at. Morbi quis euismod metus, nec rhoncus lorem. Quisque imperdiet erat sed aliquet auctor. Cras quam ligula, lobortis eget turpis ac, porta vestibulum leo. Suspendisse ac tortor porta, pellentesque eros quis, iaculis nunc. Suspendisse sit amet enim in sem malesuada feugiat. Sed ultricies semper lorem, sit amet mollis erat feugiat at. Praesent lacinia ornare sapien quis lacinia. Vestibulum eleifend pulvinar consectetur."},
      {
        title: "My Suggestion2",
        post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue risus turpis, sed facilisis ex efficitur at. Morbi quis euismod metus, nec rhoncus lorem. Quisque imperdiet erat sed aliquet auctor. Cras quam ligula, lobortis eget turpis ac, porta vestibulum leo. Suspendisse ac tortor porta, pellentesque eros quis, iaculis nunc."}
    ]
  }),
  methods: {
      next: function () {
        this.currentSlide = Math.abs(this.currentSlide + 1) % this.suggestions.length
      },
      prev: function () {
        this.currentSlide = Math.abs(this.currentSlide - 1 + this.suggestions.length) % this.suggestions.length
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.arrows {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.arrows div{
  cursor: pointer;
}

.suggestion {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 50vw;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
