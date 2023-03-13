<template>
  <div class="card-container">
    <div class="film-list">
      <div v-for="movie in movies" :key="movie.id">
        <FilmCard
          :url="movie.posterurl"
          :genres="movie.genres"
          :year="movie.year"
          :title="movie.title"
          :id="movie.id"
        />
      </div>
      <div v-intersection="downloadMoreMovies" />
    </div>
  </div>
</template>
<script setup lang="ts">
import FilmCard from "@/components/FilmCard.vue";
import { useStore } from "@/store";
import { computed } from "vue";

const store = useStore();
const movies = computed(() => store.state.movies);

const downloadMoreMovies = () => {
  store.dispatch("fetchMoreMovies");
};
</script>
<style scoped>
.card-container {
  width: 100%;
  background-color: rgb(47, 47, 47);
  min-height: 70vh;
}

.film-list {
  display: grid;
  grid-template-columns: 336px 336px 336px;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  margin: 0 auto;
  width: fit-content;
}
</style>
