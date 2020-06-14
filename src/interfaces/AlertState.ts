import { IAlertProps } from '@blueprintjs/core';

import { OPEN_ALERT, CLOSE_ALERT } from 'actions';

type Alert = {
  options: IAlertProps;
};

export interface AlertState {
  alerts: Alert[];
}

export interface OpenAlertAction {
  readonly type: typeof OPEN_ALERT;
  // readonly payload: IAlertProps;
}

export interface CloseAlertAction {
  readonly type: typeof CLOSE_ALERT;
}
