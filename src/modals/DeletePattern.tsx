import React from 'react';
import { Alert, Intent } from '@blueprintjs/core';

import { useModal } from 'hooks/useModal';
import { useLayout } from 'hooks/useLayout';

import { AppToaster } from 'helpers/toaster';

const DeletePattern: React.FC = () => {
  const { isOpen, closeModal, setIsOpen, param } = useModal();

  const { removeCustomLayout } = useLayout();

  const save = () => {
    removeCustomLayout(param.name);

    setIsOpen(false);

    AppToaster.show({
      message: 'Pattern removed!',
      intent: Intent.SUCCESS,
    });
  };

  return (
    <Alert
      isOpen={isOpen}
      confirmButtonText="Remove"
      cancelButtonText="Cancel"
      intent={Intent.DANGER}
      onConfirm={save}
      onCancel={() => setIsOpen(false)}
      onClosed={closeModal}
      canEscapeKeyCancel={true}
      icon="trash"
    >
      <h5 className="bp3-heading">
        Do you want to delete the {param.name} pattern?
      </h5>

      <p>This operation cannot be undone</p>
    </Alert>
  );
};

export default DeletePattern;
