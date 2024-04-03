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
  <div class="container text-center my-5 ">
    <input type="text" placeholder="Search.." name="search" v-model="store.queryParams.query" @keyup.enter="startSearch" >
    <!-- <button onclick="startSearch" type="submit">Search</button> -->
  </div>

</template>

<style lang="scss" scoped></style>
