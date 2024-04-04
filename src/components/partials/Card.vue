<script>
export default {
  props: {
    cardObj: Object, 
  },
  methods:{
    ratingStars(vote) { return Math.floor(vote/2) },
    // ratingStars(vote) { return Math.ceils(5 - (vote/2)) }
  }

}

</script>

<template>

 <div class="col">
  <div class="card mb-3 ">
    <img :src="`https://image.tmdb.org/t/p/w342` + cardObj.poster_path" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ cardObj.title || cardObj.name }}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">{{ cardObj.original_title || cardObj.original_name }}</h6>
      <p v-if="cardObj.original_language!== 'it' && cardObj.original_language!== 'en' " class="card-text">
        {{ cardObj.original_language }}
      </p>
      <p v-else class="flag">
        <img :src="'/public/flags/' +  cardObj.original_language + '.png'" alt="">
      </p>
      <p class="card-text">
        <i v-for="star in ratingStars(cardObj.vote_average)" :key="star" class="fa-solid fa-star"></i>
        <i v-for="star in (5 - ratingStars(cardObj.vote_average))" :key="star" class="fa-regular fa-star"></i>
         {{ratingStars(cardObj.vote_average)}}
      </p>
    </div>
  </div>
</div>

</template>

<style lang="scss" scoped>
  .flag{
    width: 80px;
  }
</style>
