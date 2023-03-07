<template>
  <div class="info-container">
    <div class="info-wrapper">
      <img
        v-if="!store.state.isFetching"
        :src="store.state.detailedMovie?.posterurl"
        alt="NO IMG"
      />
      <div v-else class="loading">Loading...</div>
      <div class="detailed-info">
        <div class="title">
          <p class="title-name">{{ store.state.detailedMovie?.title }}</p>
          <div class="rating">{{ store.state.detailedMovie?.imdbRating }}</div>
        </div>
        <div class="genres">
          {{ store.state.detailedMovie?.genres.join(" & ") }}
        </div>
        <div class="film-year-duration">
          <p class="year">
            <span>{{ store.state.detailedMovie?.year }}</span>
            year
          </p>
          <p class="duration">
            <span>{{ duration }}</span>
          </p>
        </div>
        <p class="description">{{ store.state.detailedMovie?.storyline }}</p>
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
import FindInfo from "@/containers/FindInfo.vue";
import { useStore } from "@/store";
import { useRoute } from "vue-router";
import { watch, computed } from "vue";

const route = useRoute();
const store = useStore();

store.dispatch("fetchSingleMovie", route.params.id);

const duration = computed(() => {
  return store.state.detailedMovie?.duration.slice(2, 4) + "min";
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
