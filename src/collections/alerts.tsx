import React, { lazy } from 'react';

import { LazyComponent } from 'components/LazyComponent';

import { AlertWindow } from 'enums/AlertWindow';

const Create = lazy(() => import('containers/Alerts/Create'));
const Edit = lazy(() => import('containers/Alerts/Edit'));
const Delete = lazy(() => import('containers/Alerts/Delete'));

export const ALERTS: Record<AlertWindow | any, JSX.Element> = {
  [AlertWindow.Create]: <LazyComponent component={<Create />} />,
  [AlertWindow.Edit]: <LazyComponent component={<Edit />} />,
  [AlertWindow.Delete]: <LazyComponent component={<Delete />} />,
};
