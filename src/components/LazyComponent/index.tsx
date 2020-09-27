import React, { Suspense } from 'react';

import Loader from '../Loader';

interface Props {
  readonly component: React.ReactNode;
}

const LazyComponent = ({ component }: Props) => (
  <Suspense fallback={<Loader />}>{component}</Suspense>
);

export default LazyComponent;
