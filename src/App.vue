<script>
import axios from 'axios';
import { store } from './data/store';
import SearchBar from './components/SearchBar.vue';
import CardsContainer from './components/CardsContainer.vue'
export default {
  components: {
    SearchBar,
    CardsContainer
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(type){
      axios.get(store.apiUrl + type, {
        params: store.queryParams
      })
        .then(res => {
          store[type] = res.data.results;
          console.log(store[type]); 
        })
    },
    startSearch(){
      this.getApi('movie')
      this.getApi('tv')
    }
  },
  mounted(){
    this.startSearch()
  }
}

</script>

<template>

  <SearchBar @startSearch="startSearch" />
  <CardsContainer type="movie" v-if="store.movie.length > 0" />
  <CardsContainer type="tv" v-if="store.tv.length > 0" />

</template>

<style lang="scss">
@use './assets/scss/main.scss';
</style>./components/CardsContainer.vue/SearchBar.vue
