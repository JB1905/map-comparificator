import React from 'react';
import { render } from '@testing-library/react';

import BingMaps from '.';

jest.mock('hooks/useMaps', () => ({
  useMaps: () => ({
    coords: [],
  }),
}));

describe('BingMaps', () => {
  it('should render the map', () => {
    const { getByTestId } = render(<BingMaps />);

    expect(getByTestId('')).toBeInTheDocument();
  });
});
