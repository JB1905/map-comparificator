import React from 'react';

import { useAlert } from 'hooks/useAlert';

import { ALERTS } from 'collections/alerts';

const RootModal: React.FC = () => {
  const { alertType } = useAlert();

  if (!alertType) return null;

  return ALERTS[alertType];
};

export default RootModal;
