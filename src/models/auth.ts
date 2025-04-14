export interface IAuthState {
  localToken: string;
  sessionToken: string;
}

export interface ILoadingErrorState {
  error: string | null;
  loading: boolean;
}

export interface ILoginState extends ILoadingErrorState {}

export interface AccessToken {
  access_token: string;
}
