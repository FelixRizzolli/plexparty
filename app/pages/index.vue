<script setup lang="ts">
import {GET_MOVIES} from "~/queries/getMovies";

const { data, error, loading } = useAsyncQuery(GET_MOVIES);

const movies = data?.value?.movies || [];
</script>

<template>
  <div>
    <h1 class="text-center font-bold text-3xl m-6">Movies</h1>
    <div v-if="error">Error loading movies</div>
    <div v-else-if="loading">Loading...</div>
    <div v-else class="grid grid-cols-6">
      <MovieCard v-for="movie in movies" :key="movie._id" :movie="movie" />
    </div>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>