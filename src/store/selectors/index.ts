import { RootState } from '../';

export const auth = (state: RootState) => state.auth;
export const login = (state: RootState) => state.authFlow.login;
export const user = (state: RootState) => state.user;
export const movies = (state: RootState) => state.movies;
export const movie = (state: RootState) => state.movie;
