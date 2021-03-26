import { memo, Suspense } from 'react';
import * as React from 'react';

import Loader from '../Loader';

interface ChildrenProps {
  readonly children: React.ReactNode;
  readonly component?: React.ReactNode;
}

interface ComponentProps {
  readonly children?: React.ReactNode;
  readonly component: React.ReactNode;
}

type Props = ChildrenProps | ComponentProps;

const LazyComponent = memo<Props>(({ children, component }) => (
  <Suspense fallback={<Loader />}>{children ?? component}</Suspense>
));

export default LazyComponent;
