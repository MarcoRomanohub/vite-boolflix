<script>
export default {
  props: {
    title: String,
    original_title: String,
    original_language: String,
    vote_average: Number, 

  }
}

</script>

<template>
 <div class="col mb-5 ">
    <h2>{{ title }}</h2>
    <h3>{{ original_title }}</h3>
    <div>
      <span>{{ original_language }}</span>
    </div>
    <p>{{ vote_average }}</p>
 </div>


</template>

<style lang="scss" scoped></style>
