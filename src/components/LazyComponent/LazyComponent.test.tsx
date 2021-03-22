import { lazy } from 'react';
import { render, waitFor } from '@testing-library/react';

import LazyComponent from './LazyComponent';

const DummyLazy = lazy(() => import('./__mocks__/DummyLazy'));

jest.mock('../Loader', () => () => <p>Loading...</p>);

describe('LazyComponent', () => {
  const componentRenderer = () => {
    return render(<LazyComponent component={<DummyLazy />} />);
  };

  it('should render fallback loader', async () => {
    const { getByText, asFragment } = componentRenderer();

    expect(getByText('Loading...')).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render lazy component and hide fallback loader', async () => {
    const { queryByText, asFragment } = componentRenderer();

    await waitFor(() => expect(queryByText('Dummy Lazy')).toBeInTheDocument());

    expect(queryByText('Loading...')).not.toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
