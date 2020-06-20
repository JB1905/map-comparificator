import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { IAlertProps } from '@blueprintjs/core';

import { OPEN_ALERT, CLOSE_ALERT } from 'actions';

import { RootState } from 'reducers';

export const useAlert = () => {
  const dispatch = useDispatch();

  const { alertType, alertProps } = useSelector(
    (state: RootState) => state.alert
  );

  const [isOpen, setIsOpen] = useState(true);

  const openAlert = (payload: any) => dispatch({ type: OPEN_ALERT, payload });

  const closeAlert = () => dispatch({ type: CLOSE_ALERT });

  const DURATION = 300;

  const onClose = () => {
    setIsOpen(false);

    setTimeout(() => {
      closeAlert();
    }, DURATION);
  };

  const onSave = () => {};

  // const alertProps = {}

  return {
    openAlert,
    // closeAlert,
    alertType,
    alertProps,
    onClose,
    onSave,
    isOpen,
  };
};
