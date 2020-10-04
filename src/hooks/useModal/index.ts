import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as Actions from 'actions';

import { RootState } from 'reducers';

import { ModalType } from 'enums/ModalType';

export const useModal = () => {
  const dispatch = useDispatch();

  const { modalType, modalParams } = useSelector(
    (state: RootState) => state.modal
  );

  const [isOpen, setIsOpen] = useState(true);

  // TODO any + name
  const openModal = (
    modalType: ModalType,
    modalParams?: Record<string, any>
  ) => {
    dispatch(Actions.openModal({ modalType, modalParams }));
  };

  const closeModal = () => dispatch(Actions.closeModal());

  return {
    openModal,
    modalType,
    modalParams,
    closeModal,
    setIsOpen,
    isOpen,
  };
};
