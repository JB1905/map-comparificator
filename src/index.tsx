import ReactDOM from 'react-dom';

import App from 'App';

import { AppProviders } from 'components/AppProviders';

import reportWebVitals from 'reportWebVitals';

import 'index.scss';

ReactDOM.render(
  // TODO AppProviders
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root')
);

reportWebVitals(console.log);
