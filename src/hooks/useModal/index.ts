import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { OPEN_MODAL, CLOSE_MODAL } from 'actions';

import { RootState } from 'reducers';

import { ModalType } from 'enums/ModalType';

export const useModal = () => {
  const dispatch = useDispatch();

  const { modalType, modalParams } = useSelector(
    (state: RootState) => state.modal
  );

  const [isOpen, setIsOpen] = useState(true);

  const openModal = (
    modalType: ModalType,
    modalParams?: Record<string, any>
  ) => {
    dispatch({ type: OPEN_MODAL, payload: { modalType, modalParams } });
  };

  const closeModal = () => dispatch({ type: CLOSE_MODAL });

  return {
    openModal,
    modalType,
    modalParams,
    closeModal,
    setIsOpen,
    isOpen,
  };
};
