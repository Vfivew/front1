import { createAsyncThunk } from '@reduxjs/toolkit';

import { Movies, IThunkAPI } from '@src/models';
import {
  createMovieService,
  getMovieService,
  updateMovieService,
} from '@src/services/movie';
import { formatRequestError } from '@src/utils';

export const getMovie = createAsyncThunk<Movies, { id: string }, IThunkAPI>(
  'getMovies',
  async ({ id }, thunkAPI) => {
    try {
      const response = await getMovieService(id);
      return response;
    } catch (e) {
      const errorMessage = formatRequestError(e);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);

export const updateMovie = createAsyncThunk<
  Movies,
  { id: string; formData: FormData },
  IThunkAPI
>('updateMovie', async ({ id, formData }, thunkAPI) => {
  try {
    const response = await updateMovieService(id, formData);
    return response;
  } catch (e) {
    const errorMessage = formatRequestError(e);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const createMovie = createAsyncThunk<
  Movies,
  { formData: FormData },
  IThunkAPI
>('createMovie', async ({ formData }, thunkAPI) => {
  try {
    const response = await createMovieService(formData);
    return response;
  } catch (e) {
    const errorMessage = formatRequestError(e);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});
