import React from 'react';
import { render, waitFor } from '@testing-library/react';

import LazyComponent from '.';

describe('LazyComponent', () => {
  it('should render lazy component', async () => {
    const { getByText } = render(
      <LazyComponent component={<p>Hello World!</p>} />
    );

    await waitFor(() => expect(getByText(/Hello World!/i)).toBeInTheDocument());
  });
});
