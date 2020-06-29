import React from 'react';
import { render } from '@testing-library/react';

import AppleMaps from '.';

describe('AppleMaps', () => {
  it('should render the map', () => {
    const { getAllByText } = render(<AppleMaps />);

    expect(getAllByText('')).toBeInTheDocument();
  });
});
