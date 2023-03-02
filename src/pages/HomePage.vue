<template>
  <div class="wrapper">
    <SearchContainer />
    <FindInfo />
    <FindContainer />
  </div>
</template>
<script setup lang="ts">
import FindContainer from "@/containers/FindContainer.vue";
import FindInfo from "@/containers/FindInfo.vue";
import SearchContainer from "@/containers/SearchContainer.vue";
import { useStore } from "@/store";
const store = useStore();

store.dispatch("fetchMovies");
</script>
<style scoped>
.wrapper {
  margin: 0 auto;
}
</style>
