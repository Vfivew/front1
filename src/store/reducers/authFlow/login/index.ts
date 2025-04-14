import { createSlice } from '@reduxjs/toolkit';

import { signIn } from '@src/store/actions';
import { ILoginState } from 'src/models';

const initialState: ILoginState = {
  error: null,
  loading: false,
};

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    //signIn
    builder.addCase(signIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signIn.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload || null;
    });
  },
});

export const { clearError } = loginSlice.actions;

export default loginSlice.reducer;
