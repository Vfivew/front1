import { AxiosError } from 'axios';

import { CurrentUser } from '@src/models';
import { api, formatRequestError } from '@src/utils';

export const getUserService = async (): Promise<CurrentUser> => {
  try {
    const { data }: { data: CurrentUser } = await api.get('users/me');

    return data;
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      throw formatRequestError(e?.response?.data || e.message);
    }
    throw e;
  }
};
