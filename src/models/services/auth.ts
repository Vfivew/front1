export interface ISignInReq {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface IAuthResponseData {
  access_token: string;
}

export interface ISignUpReq {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
}
