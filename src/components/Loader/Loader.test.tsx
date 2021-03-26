import { render } from '@testing-library/react';

import Loader from './Loader';

describe('Loader', () => {
  it('should render component', () => {
    const { container, asFragment } = render(<Loader />);

    expect(container.querySelector('.loader')).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  // it ('should match snapshot', () => {
  //   const { asFragment } = render(<Loader />);

  //   expect(asFragment()).toMatchSnapshot();
  // })
});
