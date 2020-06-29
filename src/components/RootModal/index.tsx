import React from 'react';

import { useModal } from 'hooks/useModal';

import { MODALS } from 'collections/modals';

const RootModal: React.FC = () => {
  const { modalType } = useModal();

  if (!modalType) return null;

  const SpecificModal = MODALS[modalType];

  return <SpecificModal />;
};

export default RootModal;
