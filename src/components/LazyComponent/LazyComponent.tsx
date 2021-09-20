import { Suspense } from 'react';
import * as React from 'react';

import Loader from '../Loader';

interface ChildrenProps {
  readonly children: React.ReactNode;
  // readonly component?: React.ReactNode;
}

interface ComponentProps {
  // readonly children?: React.ReactNode;
  readonly component: React.ReactNode;
}

type Props = ChildrenProps | ComponentProps;

// TODO
const LazyComponent = (props: Props) => (
  <Suspense fallback={<Loader />}>{props.children ?? props.component}</Suspense>
);

// TODO
export default LazyComponent;
