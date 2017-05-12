<template>
  <div id="posts">

    <div v-for="number in [currentSlide]" class="suggestion">
      <h1> {{suggestions[number].title}}</h1>
      <p> {{suggestions[number].post}} </p>
      <div v-if="!auth">
        <p class="subs">Ты не можешь пока оценить этот пост. Залогинься пожалуйста</p>
      </div>
      <div v-else>
        <a @click="like" :class="{has_like}">❤</a>
        <p class="subs"> {{suggestions[number].total}}</p>
      </div>
      <div class="arrows">
        <div @click="prev" > ← </div>
        <div @click="next"> → </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'posts',
  computed: {
    auth(){
      return this.$parent.user !== null
    },
    has_like(){
      return this.$parent.user.likes.indexOf(this.currentSlide) != -1
    }

  },
  data: () => ({
    currentSlide: 0,
    suggestions: [{
      title: "Котики 🐱",
      post: "Котики очень милые. Их нужно любить и гладить. ",
      total: 10},{
      title: "Осьминожки 🐙",
      post: "Осьминоги тоже очень хорошие. Их тоже нужно любить, но гладить не стоит.",
      total: 20},{
      title: "Слоныыыыы 🐘",
      post: "Слоны большие и сильные.",
      total: 100},{
      title: "Мысли вслух 💬",
      post: "А вообще такой сайт можно было бы использовать для чего-то важного. Например, ты выдвигаешь свои идеи или предложения, а остальные оценивают их. Этакие полезные инициативы.",
      total: 1}
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
        let likes = this.$parent.user.likes;
        let is_liked = likes.indexOf(this.currentSlide)
        if (is_liked == -1)
          likes.push(this.currentSlide);
        else
          likes.splice(is_liked, 1);
        this.suggestions[this.currentSlide].total += (is_liked == -1) ? 1 : -1
      }
  }
}
</script>

<style scoped>
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

.subs{
  font-size: 15px;
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
  color: #2c3e50;
  font-size: 50px;
  user-select: none;
}

a.has_like{
  color: #ec6868;
}

</style>
