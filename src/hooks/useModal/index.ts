import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from 'hooks/useTypedSelector';

import * as Actions from 'store/actions';

import type { CustomLayout } from 'types/Layout';

import { ModalType } from 'enums/ModalType';

export const useModal = () => {
  const dispatch = useDispatch();

  const { modalType, modalParams } = useTypedSelector((state) => state.modal);

  const [isOpen, setIsOpen] = useState(true);

  const openModal = (modalType: ModalType, modalParams?: CustomLayout) => {
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
