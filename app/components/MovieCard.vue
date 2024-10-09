<script setup lang="ts">
const { movie } = defineProps(['movie']);

const pattern = /^(.*?) \((\d{4})\) \{tvdb-(\d+)\}\.mp4$/;
const match = movie.file.name.match(pattern);

const movieName = ref('');
const year = ref('');
const tvdbId = ref('');

if (match) {
  movieName.value = match[1];
  year.value = match[2];
  tvdbId.value = match[3];
}

</script>

<template>
  <div class="p-2">
    <NuxtImg class="rounded-xl"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SIMLmkxH7XpWrH9YL1iOh9qxGwOmoa4K6w&s"
        :alt="movie.file.name" />
    <h2 class="font-bold text-center">
      {{ movieName }}
    </h2>
    <p class="text-xs accent-slate-500 text-center">
      {{ `Year: ${year}, TVDB-ID: ${tvdbId}` }}
    </p>
  </div>
</template>

<style scoped>

</style>