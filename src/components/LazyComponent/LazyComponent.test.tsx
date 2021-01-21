import { lazy } from 'react';
import { render, waitFor } from '@testing-library/react';

jest.mock('../Loader', () => () => <p>Loading...</p>);

import LazyComponent from '.';

const Lazy = lazy(() => import('./LazyComponent.mock'));

describe('LazyComponent', () => {
  it('should render fallback loader', async () => {
    const { getByText } = render(<LazyComponent component={<Lazy />} />);

    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('should render lazy component and hide fallback loader', async () => {
    const { queryByText } = render(<LazyComponent component={<Lazy />} />);

    await waitFor(() => expect(queryByText(`I'm Lazy`)).toBeInTheDocument());

    expect(queryByText('Loading...')).not.toBeInTheDocument();
  });
});
