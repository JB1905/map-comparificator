import React from 'react';
import { render } from '@testing-library/react';

import GoogleMaps from '.';

describe('GoogleMaps', () => {
  it('should render the map', () => {
    const { getAllByText } = render(<GoogleMaps />);

    expect(getAllByText('')).toBeInTheDocument();
  });
});
