<script>
export default {
  props: {
    cardObj: Object, 
  },

}

</script>

<template>

 <div class="col">
  <div class="card mb-3 ">
    <img :src="`https://image.tmdb.org/t/p/w342` + cardObj.poster_path" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ cardObj.title || cardObj.name }}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">{{ cardObj.original_title || cardObj.original_name }}</h6>
      <div v-if="cardObj.original_language!== 'it' & cardObj.original_language!== 'en' ">
        <p class="card-text">{{ cardObj.original_language }}</p>
      </div>
      <div class="flag" v-else>
        <img :src="'/public/flags/' +  cardObj.original_language + '.png'" alt="">
      </div>
      <p class="card-text">{{ cardObj.vote_average}}</p>
    </div>
  </div>
</div>

</template>

<style lang="scss" scoped>
  .flag{
    width: 80px;
  }
</style>
