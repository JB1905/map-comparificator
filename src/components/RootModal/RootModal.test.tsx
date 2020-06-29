import React from 'react';
import { render } from '@testing-library/react';

import RootModal from '.';

describe('RootModal', () => {
  it('should render', () => {
    const { getByText } = render(<RootModal />);
  });
});
