<template>
  <div class="info-container">
    <div class="info-wrapper">
      <img v-if="!store.state.isFetching" :src="movie.posterurl" alt="NO IMG" />
      <div v-else class="loading">Loading...</div>
      <div class="detailed-info">
        <div class="title">
          <p class="title-name">{{ movie.title }}</p>
          <div class="rating">{{ movie.imdbRating }}</div>
        </div>
        <div class="genres">
          {{ movie.genres.join(" & ") }}
        </div>
        <div class="film-year-duration">
          <p class="year">
            <span>{{ movie.year }}</span>
            year
          </p>
          <p class="duration">
            <span>{{ duration }}</span>
          </p>
        </div>
        <p class="description">{{ movie.storyline }}</p>
      </div>
    </div>
  </div>
  <div class="search-info">
    <p></p>
  </div>
  <FindContainer />
</template>
<script setup lang="ts">
import FindContainer from "@/containers/FindContainer.vue";
import { useStore } from "@/store";
import { useRoute } from "vue-router";
import { watch, computed, ComputedRef } from "vue";

import type { TMovie } from "@/store";

const route = useRoute();
const store = useStore();

const movie: ComputedRef<TMovie> = computed(() => store.getters.getSingleMovie);

const duration = computed(() => {
  return movie.value.duration.slice(2, -1) + "min";
});

watch(route, () => store.dispatch("fetchSingleMovie", route.params.id));
</script>
<style scoped>
.search-info {
  background-color: rgb(121, 121, 121);
  height: 80px;
}

.loading {
  width: 336px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
}

img {
  width: 336px;
  height: 500px;
}

.film-year-duration {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
}

.film-year-duration span {
  font-size: 2rem;
  color: red;
}
.info-container {
  padding-top: 50px;
  padding-bottom: 50px;
  width: 100%;
  background-color: rgb(47, 47, 47);
}

.info-wrapper {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.detailed-info {
  width: 60%;
  color: white;
}

.title {
  display: flex;
  flex-direction: row;
  padding-top: 30px;
}

.title-name {
  font-size: 50px;
  margin: 0;
  padding-right: 30px;
}

.rating {
  width: 50px;
  height: 50px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: green;
}
</style>
