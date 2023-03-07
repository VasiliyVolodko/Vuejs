// store.ts
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

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
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    movies: [],
    isFetching: false,
    detailedMovie: null,
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
  },
  actions: {
    async fetchMovies({ commit }) {
      try {
        commit("setIsFetching", true);
        const response = await fetch(
          "https://tame-erin-pike-toga.cyclic.app/movies"
        );
        const movies = await response.json();
        commit("setMovies", movies);
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
  },
});

export function useStore() {
  return baseUseStore(key);
}
