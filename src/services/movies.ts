import { AxiosError } from 'axios';

import { GetMoviesResponseBodyDto } from '@src/models';
import { api, formatRequestError } from '@src/utils';

export const getMoviesService = async (
  page: number,
  take: number,
): Promise<GetMoviesResponseBodyDto> => {
  try {
    const { data }: { data: GetMoviesResponseBodyDto } = await api.get(
      'movies',
      {
        params: { page, take },
      },
    );

    return data;
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      throw formatRequestError(e?.response?.data || e.message);
    }
    throw e;
  }
};
