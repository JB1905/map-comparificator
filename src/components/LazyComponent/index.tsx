import React, { Suspense } from 'react';
import { Spinner } from '@blueprintjs/core';

import './LazyComponent.scss';

interface Props {
  component: JSX.Element;
}

export const LazyComponent: React.FC<Props> = ({ component }) => (
  <Suspense fallback={<Spinner className="loader" size={Spinner.SIZE_SMALL} />}>
    {component}
  </Suspense>
);
