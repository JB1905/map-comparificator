import React from 'react';
import { Alert, Intent } from '@blueprintjs/core';

import { useModal } from 'hooks/useModal';
import { useLayout } from 'hooks/useLayout';

import { AppToaster } from 'helpers/toaster';

const DeletePattern: React.FC = () => {
  const { isOpen, onClose, param } = useModal();

  const { removeCustomLayout } = useLayout();

  const save = () => {
    removeCustomLayout(param.name);

    AppToaster.show({
      message: 'Pattern removed!',
      intent: Intent.SUCCESS,
    });

    onClose();
  };

  return (
    <Alert
      isOpen={isOpen}
      confirmButtonText="Remove"
      cancelButtonText="Cancel"
      intent={Intent.DANGER}
      onCancel={onClose}
      onClose={save}
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
