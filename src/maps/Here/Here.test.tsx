import React from 'react';
import { render } from '@testing-library/react';

import HereMaps from '.';

describe('HereMaps', () => {
  it('should render the map', () => {
    const { getAllByText } = render(<HereMaps />);

    expect(getAllByText('')).toBeInTheDocument();
  });
});
