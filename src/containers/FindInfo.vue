<template>
  <div class="container">
    <div class="wrapper">
      <p>{{ store.state.meta.totalMovies }} movies found</p>
      <div class="sorting-filter-group">
        <p class="sort-by">SORT BY</p>
        <ButtonComponent
          text="RELEASE DATE"
          width="200px"
          height="40px"
          :on-click="releaseClick"
          :active="filter === 'releaseDate'"
        />
        <ButtonComponent
          text="RATING"
          width="100px"
          height="40px"
          :on-click="ratingClick"
          :active="filter === 'imdbRating'"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ButtonComponent from "@/components/ButtonComponent.vue";
import { useStore } from "@/store";
import { ref } from "vue";
import type { Ref } from "vue";

const filter: Ref<"releaseDate" | "imdbRating"> = ref("releaseDate");

const releaseClick = () => {
  filter.value = "releaseDate";
  store.commit("setFilters", {
    ...store.state.filters,
    _page: 1,
    _sort: "releaseDate",
  });
  store.dispatch("fetchMovies");
};

const ratingClick = () => {
  filter.value = "imdbRating";
  store.commit("setFilters", {
    ...store.state.filters,
    _page: 1,
    _sort: "rating",
  });
  store.dispatch("fetchMovies");
};

const store = useStore();
</script>
<style scoped>
.sorting-filter-group {
  display: flex;
  flex-direction: row;
}
.wrapper {
  display: flex;
  width: 80%;
  margin: 0 auto;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
}
.container {
  background-color: rgb(121, 121, 121);
  color: white;
}
</style>
