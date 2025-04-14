import { TOptions } from 'i18next';

import translation from '@src/locales/langs/en.json';

type RecursiveKeyOf<TObj extends Record<string, unknown>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, unknown>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & string];

type DefaultLocale = typeof translation;

export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

declare module 'i18next' {
  // Extend the TFunction interface
  interface TFunction {
    (key: TxKeyPath, options?: TOptions | string): string;
    <TResult>(key: TxKeyPath, options?: TOptions | string): TResult;
  }
}
