<script>
import { store } from '../data/store'
export default {
  data() {
    return {
      store
    }
  },
  methods:{
    startSearch(){
      this.$emit('startSearch')
    }
  }
}

</script>

<template>
  <div class="container text-center d-flex  my-5 ">
    <input type="text" class="form-control me-3 " placeholder="Search.." name="search" v-model.trim="store.queryParams.query" >
    <button @click="$emit('startSearch')" class="btn btn-primary " type="submit">Search</button>
  </div>

</template>

<style lang="scss" scoped></style>
