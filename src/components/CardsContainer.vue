<script>
import Card from './partials/Card.vue';
import { store } from '../data/store'
export default {
  props:{
    type: String
  },
  components :{
    Card
  },
  data() {
    return {
      store
    }
  },
  computed:{
    title(){
      return this.type === 'movie' ? 'Film' : 'Serie TV'
    }
  }
}

</script>

<template>
  <div class="text-center container my-5">
    <h2>{{ title }}</h2>
    <div class="row row-cols-2 row-cols-md-4">
      <Card v-for="card in store[type]" :key="card.id" :cardObj="card" />
    </div>
  </div>

</template>

<style lang="scss" scoped></style>./CardsContainer.vue./partials/Card.vue
