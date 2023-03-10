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
          @keyup.enter="searchButtonHandler"
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
          :on-click="titleClick"
          :active="store.state.filters.searchBy === 'title'"
        />
        <ButtonComponent
          text="GENRE"
          width="80px"
          height="40px"
          :on-click="genreClick"
          :active="store.state.filters.searchBy === 'genres'"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ButtonComponent from "@/components/ButtonComponent.vue";
import InputComponent from "@/components/InputComponent.vue";
import axios from "axios";
import { useStore } from "@/store";

const store = useStore();

const genreClick = () => {
  store.commit("setFilters", {
    ...store.state.filters,
    _page: 1,
    searchBy: "genres",
  });
  store.dispatch("fetchMovies");
};

const titleClick = () => {
  store.commit("setFilters", {
    ...store.state.filters,
    _page: 1,
    searchBy: "title",
  });
  store.dispatch("fetchMovies");
};

const searchButtonHandler = async () => {
  store.dispatch("fetchMovies");
};

const handleInputChange = (val: string) => {
  store.commit("setFilters", {
    ...store.state.filters,
    searchField: val,
  });
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
