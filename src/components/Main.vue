<script>
import movieCard from './partials/movieCard.vue';
import { store } from '../data/store'
export default {
  components :{
    movieCard
  },
  data() {
    return {
      store
    }
  }
}

</script>

<template>
  <div class="text-center container my-5">
    <div class="row row-cols-2 row-cols-md-4">
      <movieCard v-for="movie in store.movieList" :key="movie.id" :title="movie.title" :original_title="movie.original_title" :original_language="movie.original_language" :vote_average="movie.vote_average" />
    </div>
  </div>

</template>

<style lang="scss" scoped></style>
