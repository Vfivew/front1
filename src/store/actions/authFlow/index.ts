import { createAsyncThunk } from '@reduxjs/toolkit';

import { ISignInReq, ISignUpReq, IThunkAPI } from '@src/models';
import { signInService, signUpService } from '@src/services';
import { setLocalToken } from '@src/store/reducers/auth';
import { formatRequestError } from '@src/utils';

export const signUp = createAsyncThunk<string, ISignUpReq, IThunkAPI>(
  'signUp',
  async (
    { email, firstName, lastName, password, repeatPassword },
    thunkAPI,
  ) => {
    try {
      const data = await signUpService({
        email,
        firstName,
        lastName,
        password,
        repeatPassword,
      });

      thunkAPI.dispatch(setLocalToken(data));

      return data;
    } catch (e) {
      const errorMessage = formatRequestError(e);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);

export const signIn = createAsyncThunk<string, ISignInReq, IThunkAPI>(
  'signIn',
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await signInService({ email, password });

      thunkAPI.dispatch(setLocalToken(data));
      return data;
    } catch (e: unknown) {
      const errorMessage = formatRequestError(e);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);
