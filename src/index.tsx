import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import App from 'App';

import * as serviceWorker from 'serviceWorker';

import store from 'store';

import 'index.scss';

i18next.init();

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
