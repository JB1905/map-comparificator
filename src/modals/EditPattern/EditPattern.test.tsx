import React from 'react';
import { render } from '@testing-library/react';

import EditPattern from '.';

describe('EditPattern', () => {
  it('should render', () => {
    const { container } = render(<EditPattern />);

    expect(container).toBe(true);
  });
});
