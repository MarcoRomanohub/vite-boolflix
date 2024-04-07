<script>
export default {
  props: {
    cardObj: Object,
  },
  methods: {
    ratingStars(vote) { return Math.floor(vote / 2) },
  }

}

</script>

<template>

  <div class="col">
    <div class="card flip-card mb-3 ">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img :src="`https://image.tmdb.org/t/p/w342` + cardObj.poster_path" class="card-img-top" alt="...">
        </div>
        <div class="card-body flip-card-back">
          <h5 class="card-title">{{ cardObj.title || cardObj.name }}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">{{ cardObj.original_title || cardObj.original_name }}</h6>
          <p v-if="cardObj.original_language !== 'it' && cardObj.original_language !== 'en'" class="card-text">
            {{ cardObj.original_language }}
          </p>
          <p v-else class="flag mx-auto my-3  ">
            <img :src="'/public/flags/' + cardObj.original_language + '.png'" alt="">
          </p>
          <p class="card-text">
            <i v-for="star in ratingStars(cardObj.vote_average)" class="fa-solid fa-star"></i>
            <i v-for="star in (5 - ratingStars(cardObj.vote_average))" class="fa-regular fa-star"></i>
            {{ ratingStars(cardObj.vote_average) }}
          <div>{{ cardObj.overview }}</div>
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 440px;
  border: 1px solid rgba(0, 0, 0, 0.097);
  perspective: 1000px;
}


.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}


.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}


.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
}


.flip-card-front {
  color: black;
}


.flip-card-back {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  transform: rotateY(180deg);
  overflow-y: auto;
}

.flag {
  width: 50px;
}
</style>
