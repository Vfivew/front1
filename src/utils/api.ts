import { Store } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

import { BASE_URL } from '@src/constants';
import { i18next } from '@src/locales';
import { RootState } from '@src/store';
import { logout } from '@src/store/reducers/auth/actions';

import { formatRequestError } from './errors';

let store: Store<RootState>;

const apiInstance = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  withCredentials: true,
});

export const injectStore = (_store: Store<RootState>) => {
  store = _store;
};

apiInstance.interceptors.request.use(async (config) => {
  const currentLanguage = i18next.language;
  config.headers['Accept-Language'] = currentLanguage;
  try {
    if (
      !Object.prototype.hasOwnProperty.call(config.headers, 'Authorization')
    ) {
      const token =
        store.getState().auth.localToken || store.getState().auth.sessionToken;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
  } catch (e) {
    console.log('Error in interceptors.request', e);
  }
  return config;
});

apiInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    try {
      const { dispatch } = store;
      const expiredTokenMessange = 'Unauthorized';

      if (error.response?.status === 401) {
        dispatch(logout());
      }
      if (error.response?.data?.message !== expiredTokenMessange) {
        toast.error(formatRequestError(error));
      }

      return Promise.reject(error);
    } catch (e) {
      console.log('Error in interceptors.response', e);
      throw e;
    }
  },
);

export default apiInstance;
