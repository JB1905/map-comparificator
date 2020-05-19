import React from 'react';
import { Alert } from '@blueprintjs/core';

import { ALERTS } from 'collections/alerts';

import { AlertWindow } from 'enums/AlertWindow';

interface Props {
  readonly alertId: AlertWindow | any;
}

export const WindowAlert: React.FC<Props> = ({
  alertId,
  //  = AlertWindow.Edit,
}) => {
  console.log(alertId);

  return <Alert isOpen={alertId}>{ALERTS[alertId]}</Alert>;
};
