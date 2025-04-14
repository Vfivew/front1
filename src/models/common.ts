import { AppDispatch, RootState } from '@src/store';

export interface IThunkAPI {
  dispatch: AppDispatch;
  state: RootState;
  rejectValue: string;
}
