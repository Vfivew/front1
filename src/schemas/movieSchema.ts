import * as Yup from 'yup';

import { CreateMovieFields } from '@src/constants/index';
import { i18next } from '@src/locales';

export const MAX_NAME_LENGTH: number = 50;
export const MAX_DESCRIPTION_LENGTH: number = 50;

export const MovieSchema = () =>
  Yup.object().shape({
    [CreateMovieFields.NAME]: Yup.string()
      .required(i18next.t('errors.requiredField'))
      .max(
        MAX_NAME_LENGTH,
        i18next.t('errors.maxLengthChars', { value: MAX_NAME_LENGTH }),
      ),
    [CreateMovieFields.DESCRIPTION]: Yup.string()
      .required(i18next.t('errors.requiredField'))
      .max(
        MAX_DESCRIPTION_LENGTH,
        i18next.t('errors.maxLengthChars', { value: MAX_DESCRIPTION_LENGTH }),
      ),
    [CreateMovieFields.IMAGE_URL]: Yup.mixed().required(),
  });
