import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { getUser } from '@src/store/actions/user';
import { IUserState, CurrentUser } from 'src/models';

import { logout } from '../auth/actions';

const initialState: IUserState = {
  error: null,
  loading: false,
  currentUser: null,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
    setUser: (state: IUserState, action: PayloadAction<CurrentUser>) => {
      state.currentUser = { ...state.currentUser, ...action.payload };
    },
    clearUser: (state: IUserState) => {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => initialState);

    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload;
    });
  },
});

export const { clearError, setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
