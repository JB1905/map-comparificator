import React, { Suspense } from 'react';

import Loader from '../Loader';

interface Props {
  readonly component: JSX.Element;
}

const LazyComponent: React.FC<Props> = ({ component }) => (
  <Suspense fallback={<Loader />}>{component}</Suspense>
);

export default LazyComponent;
