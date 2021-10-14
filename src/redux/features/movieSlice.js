import { createSlice } from "@reduxjs/toolkit";
import { GetMovies } from "../services/movie";

export const initialState = {
    movies: [],
    favoriteMovies: [],
    loading: false,
    error: null,
};

export const {reducer, actions} = createSlice({
    name: "movies",
    initialState,
    reducers: {
      addFavoriteMovie: (state, action) => {
        state.favoriteMovies.unshift(action.payload)
      },
      removeFavoriteMovie: (state, action) => {
        const {payload} = action;
        const movieId = state.favoriteMovies.findIndex(movie => movie.id === payload);
        state.favoriteMovies?.splice(movieId, 1);
      },
    },
    extraReducers: {
      [GetMovies.pending]: (state) => {
        state.movies = [];
        state.loading = true;
        state.error = null
      },
      [GetMovies.fulfilled]: (state, action) => {
          state.movies = action.payload.results;
          state.loading = false;
          state.error = null
      },

      [GetMovies.rejected]: (state, action) => {
        state.movies = [];
        state.loading = false;
        state.error = action.payload.message
      },
        
    },

})

export default reducer;
export const { addFavoriteMovie, removeFavoriteMovie } = actions;

export const getAllMovies = state => state.data;