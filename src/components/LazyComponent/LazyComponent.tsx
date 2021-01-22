import { memo, Suspense } from 'react';
import * as React from 'react';

import Loader from '../Loader';

interface Props {
  readonly component: React.ReactNode;
}

const LazyComponent = memo<Props>(({ component }) => (
  <Suspense fallback={<Loader />}>{component}</Suspense>
));

export default LazyComponent;
