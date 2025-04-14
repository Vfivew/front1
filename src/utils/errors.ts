import { AxiosError } from 'axios';

import { i18next } from '@src/locales';

export const formatRequestError = (error: unknown): string => {
  if (typeof error === 'string') {
    return error;
  }
  if (error instanceof AxiosError) {
    return error.response?.data?.message;
  }
  if (error instanceof Error && error?.message) {
    return Array.isArray(error.message)
      ? error.message.join('\n')
      : error.message.toString();
  }
  return i18next.t('errors.wentWrong');
};
