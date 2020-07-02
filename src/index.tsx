import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import App from 'App';

import LazyComponent from 'components/LazyComponent';

import * as serviceWorker from 'serviceWorker';

import store from 'store';

import i18next from 'i18n';

import 'index.scss';

ReactDOM.render(
  <React.StrictMode>
    <LazyComponent
      component={
        <I18nextProvider i18n={i18next}>
          <Provider store={store}>
            <App />
          </Provider>
        </I18nextProvider>
      }
    />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
