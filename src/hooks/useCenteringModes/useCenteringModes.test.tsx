import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { useCenteringModes } from '.';

// TODO
jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

// TODO
const initialState = {
  // isCustomizationEnabled: true,
};

const store = createStore<any, any, any, any>(
  (state = initialState, action) => {
    switch (
      action.type
      // case TOGGLE_CUSTOMIZATION: {
      //   return { ...state, isCustomizationEnabled: !action.payload }
      // }
    ) {
    }
  }
);

describe('useCenteringModes', () => {
  it.skip('should', () => {
    // TODO
    const wrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );

    const { result } = renderHook(() => useCenteringModes(), { wrapper });

    // expect(result.current.activeCenteringMode)
  });
});
