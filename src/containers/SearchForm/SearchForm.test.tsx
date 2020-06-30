import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import SearchForm from '.';

describe('NavbarSecondaryGroup', () => {
  it('should render', () => {
    const { getByTestId } = render(<SearchForm />);

    // fireEvent.input(getByTestId('search-input'));
  });
});
