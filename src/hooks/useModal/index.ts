import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { openModal, closeModal } from 'actions';

import { RootState } from 'reducers';

import { ModalType } from 'enums/ModalType';

export const useModal = () => {
  const dispatch = useDispatch();

  const { modalType, modalParams } = useSelector(
    (state: RootState) => state.modal
  );

  const [isOpen, setIsOpen] = useState(true);

  const opM = (modalType: ModalType, modalParams?: Record<string, any>) => {
    dispatch(openModal({ modalType, modalParams }));
  };

  const clM = () => dispatch(closeModal());

  return {
    openModal: opM, // TODO
    modalType,
    modalParams,
    closeModal: clM, // TODO
    setIsOpen,
    isOpen,
  };
};
