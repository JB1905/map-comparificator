import React from 'react';
import { render } from '@testing-library/react';

import Mapbox from '.';

describe('Mapbox', () => {
  it('should render the map', () => {
    const { getAllByText } = render(<Mapbox />);

    expect(getAllByText('')).toBeInTheDocument();
  });
});
