import React from 'react';
import { render } from '@testing-library/react';

import BingMaps from '.';

describe('BingMaps', () => {
  it('should render the map', () => {
    const { getAllByText } = render(<BingMaps />);

    expect(getAllByText('')).toBeInTheDocument();
  });
});
