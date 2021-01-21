import { lazy } from 'react';
import { render, waitFor } from '@testing-library/react';

import LazyComponent from '.';

const Lazy = lazy(() => import('./LazyComponent.mock'));

describe('LazyComponent', () => {
  it('should render fallback loader', async () => {
    const { container } = render(<LazyComponent component={<Lazy />} />);

    expect(container.querySelector('.loader')).toBeInTheDocument();
  });

  it('should render lazy component and hide fallback loader', async () => {
    const { queryByText, container } = render(
      <LazyComponent component={<Lazy />} />
    );

    await waitFor(() => expect(queryByText(`I'm Lazy`)).toBeInTheDocument());

    expect(container.querySelector('.loader')).not.toBeInTheDocument();
  });
});
