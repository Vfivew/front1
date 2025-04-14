import { IAuthState } from 'src/models';

import authReducer, { setLocalToken, setSessionToken } from './';

describe('authSlice', () => {
  const initialState: IAuthState = {
    localToken: '',
    sessionToken: '',
  };

  it('should return the initial state', () => {
    expect(authReducer(undefined, { type: 'undefined' })).toEqual(initialState);
  });

  describe('reducers', () => {
    it('should handle setLocalToken', () => {
      const localToken = 'localToken123';
      const nextState = authReducer(initialState, setLocalToken(localToken));
      expect(nextState.localToken).toBe(localToken);
    });

    it('should handle setSessionToken', () => {
      const sessionToken = 'sessionToken456';
      const nextState = authReducer(
        initialState,
        setSessionToken(sessionToken),
      );
      expect(nextState.sessionToken).toBe(sessionToken);
    });
  });
});
