import React, { Suspense } from 'react';
import { Spinner } from '@blueprintjs/core';

interface Props {
  component: JSX.Element;
}

export const LazyComponent: React.FC<Props> = ({ component }) => (
  <Suspense fallback={<Spinner size={Spinner.SIZE_SMALL} />}>
    {component}
  </Suspense>
);
