import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from 'hooks/useTypedSelector';

import * as Actions from 'store/actions';

import type { CustomLayout } from 'types/Layout';

import { ModalType } from 'enums/ModalType';

type OpenModalCallback = (
  modalType: ModalType,
  modalParams?: CustomLayout
) => void;

export const useModal = () => {
  const dispatch = useDispatch();

  const { modalType, modalParams } = useTypedSelector((state) => state.modal);

  const [isOpen, setIsOpen] = useState(true);

  const openModal = useCallback<OpenModalCallback>(
    (modalType, modalParams) => {
      dispatch(Actions.openModal({ modalType, modalParams }));
    },
    [dispatch]
  );

  const closeModal = useCallback(() => dispatch(Actions.closeModal()), [
    dispatch,
  ]);

  return {
    openModal,
    modalType,
    modalParams,
    closeModal,
    setIsOpen,
    isOpen,
  };
};
