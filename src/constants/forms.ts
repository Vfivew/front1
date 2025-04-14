export enum LoginFields {
  EMAIL = 'email',
  PASSWORD = 'password',
  REMEMBER_ME = 'rememberMe',
}

export enum RegisterFields {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  EMAIL = 'email',
  PASSWORD = 'password',
  REPEAT_PASSWORD = 'confirmPassword',
}

export enum ForgotPasswordFields {
  EMAIL = 'email',
  OTP_CODE = 'OTPCode',
  PASSWORD = 'password',
  REPEAT_PASSWORD = 'confirmPassword',
}

export enum VerifyEmailFields {
  OTP_CODE = 'OTPCode',
}

export enum UpdateProfileFields {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
}

export enum ChangePasswordFields {
  OLD_PASSWORD = 'oldPassword',
  NEW_PASSWORD = 'newPassword',
  REPEAT_NEW_PASSWORD = 'confirmNewPassword',
}

export enum CreateMovieFields {
  NAME = 'name',
  DESCRIPTION = 'description',
  IMAGE_URL = 'movieImage',
}

export const OTP_CODE_LENGTH = 6;

export const DEFAULT_BUTTON_COUNTDOWN = 55;
