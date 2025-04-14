import { createAsyncThunk } from '@reduxjs/toolkit';

import { CurrentUser, IThunkAPI } from '@src/models';
import { getUserService } from '@src/services';
import { formatRequestError } from '@src/utils';

export const getUser = createAsyncThunk<CurrentUser, undefined, IThunkAPI>(
  'getUser',
  async (_, thunkAPI) => {
    try {
      const currentUser = await getUserService();
      return currentUser;
    } catch (e) {
      const errorMessage = formatRequestError(e);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);
