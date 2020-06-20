import React from 'react';

import CreatePattern from 'modals/CreatePattern';
import EditPattern from 'modals/EditPattern';
import DeletePattern from 'modals/DeletePattern';

import { useAlert } from 'hooks/useAlert';

import { AlertType } from 'enums/AlertType';

const ALERTS = {
  [AlertType.Create]: CreatePattern,
  [AlertType.Edit]: EditPattern,
  [AlertType.Delete]: DeletePattern,
} as any;

const RootModal: React.FC = () => {
  const { alertType, alertProps } = useAlert();

  if (!alertType) return null;

  const SpecificModal = ALERTS[alertType];

  return <SpecificModal {...alertProps} />;
};

export default RootModal;
