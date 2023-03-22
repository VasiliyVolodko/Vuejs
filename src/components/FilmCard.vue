<template>
  <div class="wrapper">
    <RouterLink :to="`/details/${id}`">
      <img class="poster" :src="url" alt="No IMG" />
    </RouterLink>
    <div class="film-info">
      <p class="title">{{ title }}</p>
      <p class="year">{{ year }}</p>
      <p class="genres">{{ genres?.join(", ") }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  url: string;
  title: string;
  genres: string[];
  year: string;
  id: number;
}>();
</script>
<style scoped>
.poster {
  width: 336px;
  height: 500px;
  cursor: pointer;
}

.wrapper {
  height: 600px;
  width: 336px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: rgb(219, 219, 219);
}

p {
  margin: 6px;
}

.film-info {
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 50% 50%;
}

.year {
  text-align: center;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 4px;
}
</style>
