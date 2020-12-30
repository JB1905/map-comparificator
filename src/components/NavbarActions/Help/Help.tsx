import { Button } from '@blueprintjs/core';

import { useModal } from 'hooks/useModal';

import { ModalType } from 'enums/ModalType';

const Help = () => {
  const { openModal } = useModal();

  return (
    <Button icon="help" onClick={() => openModal(ModalType.Help)} minimal />
  );
};

export default Help;
