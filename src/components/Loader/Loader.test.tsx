import { render } from '@testing-library/react';

import Loader from './Loader';

describe('Loader', () => {
  it('should render component', () => {
    const { container } = render(<Loader />);

    expect(container.querySelector('.loader')).toBeInTheDocument();
  });
});
