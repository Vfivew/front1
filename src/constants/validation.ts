export const UK_PHONE_NUMBER_REG_EXP =
  /^(\+44|44|0)?((1\d{9}|2\d{9}|3\d{9}|5\d{9}|7\d{9}|8\d{9})|(7\d{9}))$/;

export const EMAIL_REG_EXP =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

export const PASSWORD_REG_EXP =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9\s]).+$/;

export const OTP_CODE_REG_EXP = /^\d{6}$/;
