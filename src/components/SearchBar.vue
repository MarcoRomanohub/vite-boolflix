<script>
import { store } from '../data/store'
export default {
  data() {
    return {
      store
    }
  },
  methods: {
    startSearch() {
      this.$emit('startSearch')
    }
  }
}

</script>

<template>
  <header class=" d-flex justify-content-between align-items-center ">
    <div class="logo mx-5 ">
      <h2>BOOLFLIX</h2>
    </div>
    <div class=" searchbar d-flex mx-5  ">
      <input type="text" class="form-control me-3 " placeholder="Cerca film o serie tv.." name="search"
        v-model.trim="store.queryParams.query">
      <button @click="$emit('startSearch')" class="btn btn-primary " type="submit">Search</button>
    </div>
  </header>

</template>

<style lang="scss" scoped>
.dbg {
  border: 1px solid rgba(255, 0, 0, 0.335);
}

header {
  // width: 100vw;
  height: 80px;
  background-color: black;

  .logo {
    color: red;
  }
}
</style>
