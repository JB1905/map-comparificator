import React from 'react';
import { render } from '@testing-library/react';

import App from 'App';

jest.mock('hooks/useTheme', () => ({
  useTheme: () => ({
    isDark: false,
  }),
}));

jest.mock('hooks/useLayout', () => ({
  useLayout: () => ({
    activeLayout: {},
    setActiveLayout: () => jest.fn(),
  }),
}));

jest.mock('hooks/useSettings', () => ({
  useSettings: () => ({
    isCustomizationEnabled: false,
  }),
}));

describe('App', () => {
  it('should render', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('page')).toBe(true);
  });
});
