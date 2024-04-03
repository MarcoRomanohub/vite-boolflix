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
          console.log(result.data);
          this.store.movieList = result.data 
        })
    }
  },
  mounted(){
    this.getApi()
  }
}

</script>

<template>

  <Header />
  <Main />

</template>

<style lang="scss" scoped>
@use './assets/scss/main.scss';
</style>
