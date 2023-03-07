<template>
  <div class="container">
    <div class="container-content">
      <h2>FIND YOUR MOVIE</h2>
      <div class="wrapper">
        <InputComponent
          type="text"
          width="700px"
          height="50px"
          placeholder="Search"
          @value="handleInputChange"
        />
        <ButtonComponent
          text="Search"
          width="200px"
          height="50px"
          :on-click="searchButtonHandler"
          :active="true"
        />
      </div>
      <div class="search-filter-buttons">
        <p>Search by</p>
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
import InputComponent from "@/components/InputComponent.vue";
import { ref } from "vue";
import axios from "axios";

const searchLine = ref("");
const isTitleFilter = ref(false);

const toggleFilter = () => {
  isTitleFilter.value = !isTitleFilter.value;
};

const searchButtonHandler = async () => {
  const res = await axios.get(
    `https://tame-erin-pike-toga.cyclic.app/movies?q=${searchLine.value}`
  );
  const value = res.data;
};

const handleInputChange = (val: string) => {
  searchLine.value = val;
};
</script>
<style scoped>
.wrapper {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
}

.container {
  width: 100%;
  background-color: rgb(47, 47, 47);
  height: 200px;
  color: white;
}

.container-content {
  width: 950px;
  margin: 0 auto;
}

.search-filter-buttons {
  display: flex;
  flex-direction: row;
}

.search-filter-buttons p {
  color: white;
  font-size: 1.5rem;
  padding-right: 50px;
  margin: 0;
}
</style>
