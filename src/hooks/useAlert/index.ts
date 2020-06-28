import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { IAlertProps } from '@blueprintjs/core';

import { OPEN_ALERT, CLOSE_ALERT } from 'actions';

import { RootState } from 'reducers';

import { AlertType } from 'enums/AlertType';

export const useAlert = () => {
  const dispatch = useDispatch();

  const { alertType } = useSelector((state: RootState) => state.alert);

  const [isOpen, setIsOpen] = useState(true);

  const openAlert = (payload: AlertType) =>
    dispatch({ type: OPEN_ALERT, payload });

  const closeAlert = () => dispatch({ type: CLOSE_ALERT });

  const DURATION = 300;

  const onCancel = () => {
    setIsOpen(false);

    setTimeout(() => {
      closeAlert();
    }, DURATION);
  };

  const onClose = () => {
    onCancel();
  };

  // const alertProps = {}

  return {
    openAlert,
    // closeAlert,
    alertType,
    onCancel,
    onClose,
    isOpen,
  };
};
