import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { I18nextProvider } from 'react-i18next';

import App from 'App';

import LazyComponent from 'components/LazyComponent';
import Loader from 'components/Loader';

import * as serviceWorker from 'serviceWorker';

import { store, persistor } from 'store';

import i18next from 'i18n';

import 'index.scss';

ReactDOM.render(
  <StrictMode>
    <LazyComponent
      component={
        <I18nextProvider i18n={i18next}>
          <Provider store={store}>
            <PersistGate loading={<Loader />} persistor={persistor}>
              <App />
            </PersistGate>
          </Provider>
        </I18nextProvider>
      }
    />
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
