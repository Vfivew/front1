import { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { TOAST_DURATION } from '@src/constants';
import { persistor, store } from '@src/store';
import ThemeCustomization from '@src/themes';
import { injectStore } from '@src/utils/api';

import '@src/locales';

import './styles.css';

injectStore(store);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeCustomization>
          <Component {...pageProps} />
          <Toaster
            toastOptions={{
              duration: TOAST_DURATION,
            }}
          />
        </ThemeCustomization>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
