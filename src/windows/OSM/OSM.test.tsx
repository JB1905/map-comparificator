import React from 'react';
import { render } from '@testing-library/react';

import OSM from '.';

describe('OSM', () => {
  it('should render component', () => {
    const { findAllByTestId } = render(<OSM />);

    expect(findAllByTestId('osm')).toBe(true);
  });
});
