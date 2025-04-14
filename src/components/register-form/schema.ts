import * as Yup from 'yup';

import {
  EMAIL_REG_EXP,
  PASSWORD_REG_EXP,
  RegisterFields,
} from '@src/constants/index';
import { i18next } from '@src/locales';

export const MIN_PASSWORD_LENGTH: number = 8;
export const MAX_GMC_LENGTH: number = 50;
export const MAX_NAME_LENGTH: number = 100;

export const RegisterSchema = () =>
  Yup.object().shape({
    [RegisterFields.FIRST_NAME]: Yup.string()
      .required(i18next.t('errors.requiredField'))
      .max(
        MAX_NAME_LENGTH,
        i18next.t('errors.maxLengthChars', { value: MAX_NAME_LENGTH }),
      ),
    [RegisterFields.LAST_NAME]: Yup.string()
      .required(i18next.t('errors.requiredField'))
      .max(
        MAX_NAME_LENGTH,
        i18next.t('errors.maxLengthChars', { value: MAX_NAME_LENGTH }),
      ),
    [RegisterFields.EMAIL]: Yup.string()
      .required(i18next.t('errors.requiredField'))
      .matches(EMAIL_REG_EXP, i18next.t('errors.invalidEmail')),
    [RegisterFields.PASSWORD]: Yup.string()
      .required(i18next.t('errors.requiredField'))
      .min(
        MIN_PASSWORD_LENGTH,
        i18next.t('errors.minLengthPass', { value: MIN_PASSWORD_LENGTH }),
      )
      .matches(PASSWORD_REG_EXP, i18next.t('errors.invalidPass')),
    [RegisterFields.REPEAT_PASSWORD]: Yup.string()
      .required(i18next.t('errors.requiredField'))
      .oneOf(
        [Yup.ref(RegisterFields.PASSWORD)],
        i18next.t('errors.passwordsDontMatch'),
      ),
  });
