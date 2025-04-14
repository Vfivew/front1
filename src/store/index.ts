import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';

import authReducer from './reducers/auth';
import authFlowReducer from './reducers/authFlow';
import movieReducer from './reducers/movie';
import moviesReducer from './reducers/movies';
import userReducer from './reducers/user';

const persistConfig = {
  key: 'store',
  blacklist: ['auth'],
  storage: sessionStorage,
};

const reducers = combineReducers({
  auth: authReducer,
  authFlow: authFlowReducer,
  user: userReducer,
  movies: moviesReducer,
  movie: movieReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
