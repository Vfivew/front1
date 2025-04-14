import MockAdapter from 'axios-mock-adapter';

import { api } from '@src/utils';

import { signUpService } from '../auth';

const mock = new MockAdapter(api);

vi.mock('@src/store', () => ({
  store: {
    dispatch: vi.fn(),
  },
}));

describe('signUpService', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should sign up successfully and return access token', async () => {
    const reqData = {
      email: 'test@example.com',
      firstName: 'First',
      lastName: 'Last',
      password: 'password',
      repeatPassword: 'password',
    };

    const mockResponse = { access_token: 'fake-token' };

    mock.onPost('auth/sign-up', reqData).reply(200, mockResponse);

    const accessToken = await signUpService(reqData);

    expect(accessToken).toEqual(mockResponse.access_token);
  });
});
