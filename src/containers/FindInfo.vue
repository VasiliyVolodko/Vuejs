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
          :on-click="() => handleClick('releaseDate')"
          :active="isReleaseFilter"
        />
        <ButtonComponent
          text="RATING"
          width="100px"
          height="40px"
          :on-click="() => handleClick('imdbRating')"
          :active="!isReleaseFilter"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ButtonComponent from "@/components/ButtonComponent.vue";
import { useStore } from "@/store";
import { ref, computed } from "vue";
import type { Ref } from "vue";

const filter: Ref<"releaseDate" | "imdbRating"> = ref("releaseDate");
const store = useStore();

const isReleaseFilter = computed(() => filter.value === "releaseDate");

const handleClick = (filterValue: "releaseDate" | "imdbRating") => {
  if (filter.value !== filterValue) {
    filter.value = filterValue;
    store.dispatch("updateFilters", {
      ...store.state.filters,
      _page: 1,
      _sort: filterValue,
    });
    store.dispatch("fetchMovies");
  }
};
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
