import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import App from 'App';

import rootReducer from 'reducers';

describe('App', () => {
  it('should render', () => {
    const mockStore = createStore(rootReducer);

    const { getByTestId } = render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );

    expect(getByTestId('page')).toBe(true);
  });

  // it('should', () => {
  //   jest.mock('react-viewport-hooks', () => {
  //     return {
  //       vw: 500,
  //     };
  //   });
  // });
});
