<template>
  <div id="posts">

    <div v-for="number in [currentSlide]" class="suggestion">
      <h1> {{suggestions[number].title}}</h1>
      <p> {{suggestions[number].post}} </p>
      <p v-if="!auth"> You should sign in to vote</p>
      <div v-else>
        <a @click="like" :class="{has_like}">❤</a>
      </div>
      <div class="arrows">
        <div @click="prev" > ← </div>
        <div @click="next"> → </div>
      </div>

    </div>
  </div>
</template>

<script>
import App from '../App.vue';

export default {
  name: 'posts',
  component:{
    App
  },
  computed: {
    auth(){
      return this.$parent.user.id
    },
    has_like(){
      return this.$parent.user.like
    }

  },
  data: () => ({
    // test: this.$parent.ok,
    currentSlide: 0,
    suggestions: [{
      title: "Котики 🐱",
      post: "Котики очень милые. Их нужно любить и гладить. "},{
      title: "Осьминожки 🐙",
      post: "Осьминоги тоже очень хорошие. Их тоже нужно любить, но гладить не стоит."},{
      title: "Слоныыыыы 🐘",
      post: "Слоны большие и сильные."},{
      title: "Мысли вслух 💬",
      post: "А вообще такой сайт можно было бы использовать для чего-то важного. Например, ты выдвигаешь свои идеи или предложения, а остальные оценивают её. Этакие полезные инициативы."
      }
    ]
  }),
  methods: {
      next: function () {
        this.currentSlide = Math.abs(this.currentSlide + 1) % this.suggestions.length
      },
      prev: function () {
        this.currentSlide = Math.abs(this.currentSlide - 1 + this.suggestions.length) % this.suggestions.length
      },
      like: function () {
        console.log("like")
        this.$parent.user.like = !this.$parent.user.like
      }
  }
}
</script>

<style scoped>
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
a{
  color: black;
  font-size: 50px;
  user-select: none;
}

a.has_like{
  color: red;
}

</style>
