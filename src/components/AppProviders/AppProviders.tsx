import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { I18nextProvider } from 'react-i18next';

import LazyComponent from 'components/LazyComponent';
import Loader from 'components/Loader';

import { store, persistor } from 'store';

import i18n from 'config/i18n';

interface Props {
  readonly children: React.ReactNode
}

// TODO types
export const AppProviders = ({ children }: Props) => (
  <StrictMode>
    <LazyComponent>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <PersistGate loading={<Loader />} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
      </I18nextProvider>
    </LazyComponent>
  </StrictMode>
);
