<template>
  <div class="grid grid-cols-2 bg-secondary text-white gap-12">
    <img class="w-full" :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="">
    <div class="grid">
      <h1 class="text-4xl text-center">{{movie.original_title}}</h1>
      <p>{{movie.overview}}</p>

      <iframe
          id="inlineFrameExample"
          title="Inline Frame Example"
          width="700"
          height="500"
          :src="`http://www.youtube.com/embed/${trailer.key}?rel=0`" >
      </iframe>


      <div>
        <p class="w">
          Production companies:
        </p>
        <ul class="grid grid-cols-6">
          <li class="w-40" v-for="company in movie.production_companies" :key="company.id">
            <div v-if="company.logo_path !== null"> <!-- Check for the logo path here -->
              <img class="aspectCss p-4" :src="`https://image.tmdb.org/t/p/w500${company.logo_path}`" :alt="`${company.name} logo`">
              <p>{{ company.name }}</p>
            </div>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted} from "vue";
const movie = ref({});
const trailer = ref({});
const {getMovieDetails} = useDetails();
const {getMovieTrailer} = useTrailer();

async function getMovie() {
  movie.value = await getMovieDetails();
}

async function getTrailer() {
  trailer.value = await getMovieTrailer();
}

onMounted(() => {
  getTrailer()
  getMovie();
})

</script>

<style scoped>
  .aspectCss {
    object-fit: contain;
    aspect-ratio: 2/1;
    background: white;
  }
</style>