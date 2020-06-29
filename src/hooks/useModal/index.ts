import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { OPEN_MODAL, CLOSE_MODAL } from 'actions';

import { RootState } from 'reducers';

export const useModal = () => {
  const dispatch = useDispatch();

  const { modalType, param } = useSelector((state: RootState) => state.modal);

  const [isOpen, setIsOpen] = useState(true);

  const openModal = (modalType: any, param?: any) => {
    dispatch({ type: OPEN_MODAL, payload: { modalType, param } });
  };

  const closeModal = () => dispatch({ type: CLOSE_MODAL });

  return {
    openModal,
    modalType,
    closeModal,
    setIsOpen,
    param,
    isOpen,
  };
};
