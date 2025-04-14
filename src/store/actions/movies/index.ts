import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkAPI, GetMoviesResponseBodyDto } from '@src/models';
import { getMoviesService } from '@src/services/movies';
import { formatRequestError } from '@src/utils';

export const getMovies = createAsyncThunk<
  GetMoviesResponseBodyDto,
  { page: number; take: number },
  IThunkAPI
>('getMovies', async ({ page, take }, thunkAPI) => {
  try {
    const response = await getMoviesService(page, take);
    return response;
  } catch (e) {
    const errorMessage = formatRequestError(e);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});
