import { lazy } from 'react';
import { render, waitFor } from '@testing-library/react';

import LazyComponent from '.';

const DummyLazy = lazy(() => import('./__mocks__/DummyLazy'));

jest.mock('../Loader', () => () => <p>Loading...</p>);

describe('LazyComponent', () => {
  const componentRenderer = () =>
    render(<LazyComponent component={<DummyLazy />} />);

  it('should render fallback loader', async () => {
    const { getByText } = componentRenderer();

    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('should render lazy component and hide fallback loader', async () => {
    const { queryByText } = componentRenderer();

    await waitFor(() => expect(queryByText('Dummy Lazy')).toBeInTheDocument());

    expect(queryByText('Loading...')).not.toBeInTheDocument();
  });
});
