import { useSelector, useDispatch } from 'react-redux';
import { IAlertProps } from '@blueprintjs/core';

import { OPEN_ALERT, CLOSE_ALERT } from 'actions';

import { RootState } from 'reducers';

export const useAlert = () => {
  const dispatch = useDispatch();

  // const alert = useSelector((state:RootState )=> state.alert)

  const openAlert = (payload: IAlertProps) => {
    dispatch({ type: OPEN_ALERT, payload });
  };

  const closeAlert = (alertId: any) => {
    // dispatch({ type: CLOSE_ALERT, payload: alertId })
  };

  return {
    openAlert,
    closeAlert,
  };
};
