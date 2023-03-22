<template>
  <div class="header-wrapper">
    <RouterLink to="/">
      <h1><b>netflix</b>roulette</h1>
    </RouterLink>
    <RouterLink to="/">
      <SearchIcon class="search-icon" v-if="$route.name !== 'home'" />
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import SearchIcon from "@/icons/SearchIcon.vue";
</script>
<style scoped>
h1 {
  color: red;
}

h1:hover {
  cursor: pointer;
}

.header-wrapper {
  display: flex;
  justify-content: space-between;
  background-color: rgba(173, 216, 230, 0.1);
  align-items: center;
  height: 50px;
}

.search-icon {
  width: 50px;
  height: 50px;
  cursor: pointer;
}
</style>
