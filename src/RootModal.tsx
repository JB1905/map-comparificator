import React from 'react';

import CreatePattern from 'modals/CreatePattern';
import EditPattern from 'modals/EditPattern';
import DeletePattern from 'modals/DeletePattern';

import { useModal } from 'hooks/useModal';

import { ModalType } from 'enums/ModalType';

const MODALS = {
  [ModalType.Create]: CreatePattern,
  [ModalType.Edit]: EditPattern,
  [ModalType.Delete]: DeletePattern,
} as any;

const RootModal: React.FC = () => {
  const { modalType } = useModal();

  if (!modalType) return null;

  const SpecificModal = MODALS[modalType];

  return <SpecificModal />;
};

export default RootModal;
