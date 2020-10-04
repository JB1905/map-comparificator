import React from 'react';

import { useModal } from 'hooks/useModal';

import { MODALS } from 'collections/modals';

import './RootModal.scss';

const RootModal = () => {
  const { modalType } = useModal();

  if (!modalType) return null;

  const SpecificModal = MODALS[modalType];

  return <SpecificModal />;
};

export default RootModal;
