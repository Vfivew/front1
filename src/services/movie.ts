import { AxiosError } from 'axios';

import { Movies } from '@src/models';
import { api, formatRequestError } from '@src/utils';

export const getMovieService = async (id: string): Promise<Movies> => {
  try {
    const { data }: { data: Movies } = await api.get(`movies/${id}`);

    return data;
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      throw formatRequestError(e?.response?.data || e.message);
    }
    throw e;
  }
};

export const updateMovieService = async (
  id: string,
  formData: FormData,
): Promise<Movies> => {
  try {
    const { data }: { data: Movies } = await api.patch(
      `movies/${id}`,
      formData,
    );
    return data;
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      throw formatRequestError(e?.response?.data || e.message);
    }
    throw e;
  }
};

export const createMovieService = async (
  formData: FormData,
): Promise<Movies> => {
  try {
    const { data }: { data: Movies } = await api.post('movies', formData);
    return data;
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      throw formatRequestError(e?.response?.data || e.message);
    }
    throw e;
  }
};
