import React from 'react';
import { render } from '@testing-library/react';

import AppleMaps from '.';

jest.mock('hooks/useMaps', () => ({
  useMaps: () => ({
    coords: [],
  }),
}));

describe('AppleMaps', () => {
  it('should render the map', () => {
    const { getByTestId } = render(<AppleMaps />);

    expect(getByTestId('apple-maps')).toBeInTheDocument();
  });
});
