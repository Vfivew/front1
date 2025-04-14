import * as Yup from 'yup';

import { EMAIL_REG_EXP, LoginFields } from '@src/constants/index';
import { i18next } from '@src/locales';

export const LoginSchema = () =>
  Yup.object().shape({
    [LoginFields.EMAIL]: Yup.string()
      .required(i18next.t('errors.requiredField'))
      .matches(EMAIL_REG_EXP, i18next.t('errors.invalidEmail')),
    [LoginFields.PASSWORD]: Yup.string().required(
      i18next.t('errors.requiredField'),
    ),
    [LoginFields.REMEMBER_ME]: Yup.boolean().optional(),
  });
