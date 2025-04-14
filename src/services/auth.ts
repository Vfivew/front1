import { AxiosError } from 'axios';

import { IAuthResponseData, ISignInReq, ISignUpReq } from '@src/models';
import { api, formatRequestError } from '@src/utils';

export const signUpService = async ({
  email,
  firstName,
  lastName,
  password,
  repeatPassword,
}: ISignUpReq): Promise<string> => {
  const result = await api.post<IAuthResponseData>('auth/sign-up', {
    email,
    firstName,
    lastName,
    password,
    repeatPassword,
  });

  return result.data.access_token;
};

export const signInService = async ({
  email,
  password,
}: ISignInReq): Promise<string> => {
  try {
    const result = await api.post('auth/sign-in', {
      email,
      password,
    });

    return result.data.access_token;
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      throw formatRequestError(e?.response?.data || e.message);
    }
    throw e;
  }
};
