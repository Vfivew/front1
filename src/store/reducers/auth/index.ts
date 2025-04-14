import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import sessionStorage from 'redux-persist/lib/storage/session';

import { IAuthState } from 'src/models';

import { logout } from './actions';

const initialState: IAuthState = {
  localToken: '',
  sessionToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLocalToken(state: IAuthState, action: PayloadAction<string>) {
      state.localToken = action.payload;
    },
    setSessionToken(state: IAuthState, action: PayloadAction<string>) {
      state.sessionToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => initialState);
  },
});

const sessionPersistConfig = {
  key: 'sessionToken',
  storage: sessionStorage,
  whitelist: ['sessionToken'],
};

const localPersistConfig = {
  key: 'localToken',
  storage: storage,
  whitelist: ['localToken'],
};

const tokenPersistedReducer = persistReducer(
  sessionPersistConfig,
  authSlice.reducer,
);

const authReducer = persistReducer(localPersistConfig, tokenPersistedReducer);

export const { setLocalToken, setSessionToken } = authSlice.actions;

export default authReducer;
