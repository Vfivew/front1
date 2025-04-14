import { createSlice } from '@reduxjs/toolkit';

import { Movies } from '@src/models';
import { getMovie, updateMovie, createMovie } from '@src/store/actions/movie';

export interface IMoviesState {
  movie: Movies | null;
  loading: boolean;
  error: string | null;
}

const initialState: IMoviesState = {
  error: null,
  loading: false,
  movie: null,
};

const moviesSlice = createSlice({
  name: 'moviesSlice',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
    clearMovie: (state) => {
      state.movie = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.movie = action.payload;
      })
      .addCase(getMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.movie = action.payload;
      })
      .addCase(updateMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.movie = action.payload;
      })
      .addCase(createMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError, clearMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
