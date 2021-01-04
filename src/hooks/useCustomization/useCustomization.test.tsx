import { act, renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { useCustomization } from '.';

import { TOGGLE_CUSTOMIZATION } from 'store/actions';

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

const initialState = {
  isCustomizationEnabled: true,
};

const store = createStore<any, any, any, any>(
  (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_CUSTOMIZATION: {
        return { ...state, isCustomizationEnabled: !action.payload };
      }
    }
  }
);

describe('useCustomization', () => {
  it('should toggle customization', () => {
    // TODO
    const wrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );

    const { result } = renderHook(() => useCustomization(), { wrapper });

    expect(result.current.isCustomizationEnabled).toBe(true);

    act(() => {
      result.current.toggleCustomization();
    });

    expect(result.current.isCustomizationEnabled).toBe(false);
  });
});
