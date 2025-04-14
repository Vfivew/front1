import { createSlice } from '@reduxjs/toolkit';

import { Movies } from '@src/models';
import { getMovies } from '@src/store/actions/movies';

export interface IMoviesState {
  movies: Movies[];
  metadata: {
    itemsAmount: number;
    page: number;
    take: number;
    pagesAmount: number;
    hasPrev: boolean;
    hasNext: boolean;
  };
  loading: boolean;
  error: string | null;
}

const initialState: IMoviesState = {
  error: null,
  loading: false,
  movies: [],
  metadata: {
    itemsAmount: 0,
    page: 1,
    take: 10,
    pagesAmount: 0,
    hasPrev: false,
    hasNext: false,
  },
};

const moviesSlice = createSlice({
  name: 'moviesSlice',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
    clearMovies: (state) => {
      state.movies = [];
      state.metadata = {
        itemsAmount: 0,
        page: 1,
        take: 10,
        pagesAmount: 0,
        hasPrev: false,
        hasNext: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload.movies;
        state.metadata = action.payload.metadata;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError, clearMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
