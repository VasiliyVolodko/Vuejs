<template>
  <div class="container">
    <div class="wrapper">
      <p>{{ store.state.meta.totalMovies }} movies found</p>
      <div class="sorting-filter-group">
        <p class="sort-by">SORT BY</p>
        <ButtonComponent
          text="TITLE"
          width="80px"
          height="40px"
          :on-click="toggleFilter"
          :active="isTitleFilter"
        />
        <ButtonComponent
          text="GENRE"
          width="80px"
          height="40px"
          :on-click="toggleFilter"
          :active="!isTitleFilter"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ButtonComponent from "@/components/ButtonComponent.vue";
import { useStore } from "@/store";
import { ref } from "vue";
const isTitleFilter = ref(false);

const toggleFilter = () => {
  isTitleFilter.value = !isTitleFilter.value;
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
