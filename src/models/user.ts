export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface CurrentUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface IUserState {
  error: string | null;
  loading: boolean;
  currentUser: CurrentUser | null;
}
