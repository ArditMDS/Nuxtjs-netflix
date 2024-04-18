<script setup>
import MovieCard from "~/components global/MovieCard.vue";
import {onMounted} from "vue";
const {getMovies} = useTmdb();
const movies = ref([]);

const categories = ref([
  {name: "Now playing", value: "now_playing"},
  {name: "Upcoming", value: "upcoming"},
  {name: "Popular", value: "popular"},
  {name: "Top rated", value: "top_rated"},
])

async function getMoviesHere(category) {
    movies.value = await getMovies(category);
}

onMounted(async () => {
  getMoviesHere("now_playing");
})

</script>

<template>
  <div  class="bg-secondary">

    <div class="flex justify-center gap-2 ">
      <button :key="category.name" v-for="category in categories" @click="getMoviesHere(`${category.value}`)" class="text-center rounded py-2 px-4 bg-primary hover:bg-red-300 text-white" href="#">{{category.name}}</button>
    </div>
    <div class="grid grid-cols-5 gap-10 p-10">

      <NuxtLink v-for="movie in movies" :to="`/movies/${movie.id}`">
        <MovieCard width="w-full" :movie="movie"></MovieCard>
      </NuxtLink>
    </div>
  </div>
<!--  <NuxtLink v-for="movie in movies" to="/movies/{{movie.id}}" >{{movie.original_title}}<br></NuxtLink>-->
</template>

<style scoped>

</style>