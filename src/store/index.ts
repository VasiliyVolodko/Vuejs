// store.ts
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import axios from "axios";

export type TMovie = {
  year: string;
  genres: string[];
  ratings: number[];
  poster: string;
  contentRating: number;
  duration: string;
  releaseDate: string;
  averageRating: number;
  storyline: string;
  actors: string[];
  imdbRating: number;
  posterurl: string;
  id: number;
  title: string;
};

export interface State {
  movies: TMovie[];
  isFetching: boolean;
  detailedMovie: TMovie | null;
  filters: {
    _page: number;
    _limit: number;
    searchField: string;
    _order: "asc" | "desc";
    _sort: string;
  };
  meta: {
    totalMovies: number;
  };
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    movies: [],
    isFetching: false,
    detailedMovie: null,
    filters: {
      _page: 1,
      _limit: 12,
      searchField: "",
      _order: "asc",
      _sort: "",
    },
    meta: {
      totalMovies: 0,
    },
  },
  mutations: {
    setMovies(state: State, movies: TMovie[]) {
      state.movies = movies;
    },
    setIsFetching(state: State, isFetching: boolean) {
      state.isFetching = isFetching;
    },
    setDetailedMovie(state: State, movie: TMovie) {
      state.detailedMovie = movie;
    },
    setFilters(state: State, filters: State["filters"]) {
      state.filters = filters;
    },
    setMeta(state: State, meta: State["meta"]) {
      state.meta = meta;
    },
  },
  actions: {
    async fetchMovies({ commit, state }) {
      try {
        commit("setIsFetching", true);
        const response = await axios.get(
          "https://tame-erin-pike-toga.cyclic.app/movies",
          {
            params: {
              _page: state.filters._page,
              _limit: state.filters._limit,
              _sort: state.filters._sort,
              _order: state.filters._order,
              q: state.filters.searchField,
            },
          }
        );
        commit("setMovies", response.data);
        commit("setMeta", {
          totalMovies: response.headers["x-total-count"],
        });
      } catch (e) {
        console.log(e);
      } finally {
        commit("setIsFetching", false);
      }
    },
    async fetchSingleMovie({ commit }, id: number) {
      try {
        commit("setIsFetching", true);
        const response = await fetch(
          `https://tame-erin-pike-toga.cyclic.app/movies/${id}`
        );
        const movie = await response.json();
        commit("setDetailedMovie", movie);
      } catch (e) {
        console.log(e);
      } finally {
        commit("setIsFetching", false);
      }
    },
    async fetchMoreMovies({ commit, state }) {
      try {
        const newFilters = {
          ...state.filters,
          _page: state.filters._page + 1,
        };
        console.log(newFilters);
        commit("setFilters", newFilters);
        commit("setIsFetching", true);
        const response = await axios.get(
          "https://tame-erin-pike-toga.cyclic.app/movies",
          {
            params: {
              _page: state.filters._page,
              _limit: state.filters._limit,
            },
          }
        );
        commit("setMovies", [...state.movies, ...response.data]);
      } catch (e) {
        console.log(e);
      } finally {
        commit("setIsFetching", false);
      }
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
