<script setup>

defineProps({
  movie: Object,
  width: String
})

</script>

<template>
  <div class="hover:scale-110 transition text-primary">
    <h2 class="text-white font-semibold text-center">{{movie.original_title}}</h2>
    <img :class="width" :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title || 'No image available'">
  </div>
</template>

<style scoped>

</style>