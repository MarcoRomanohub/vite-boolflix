<script>
import axios from 'axios';
import { store } from './data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
export default {
  components: {
    Header,
    Main
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(){
      axios.get(this.store.apiUrl, {
        params: store.queryParams
      })
        .then(result => {
          // console.log(result.data);
          store.movieList = result.data.results
          console.log(store.movieList); 
        })
    }
  },
  mounted(){
    this.getApi()
  }
}

</script>

<template>

  <Header @startSearch="getApi" />
  <Main />

</template>

<style lang="scss">
@use './assets/scss/main.scss';
</style>
