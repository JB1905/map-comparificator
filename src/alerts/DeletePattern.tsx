import React from 'react';
import { Alert, Intent } from '@blueprintjs/core';

import { useAlert } from 'hooks/useAlert';
import { useLayout } from 'hooks/useLayout';

const DeletePattern: React.FC = () => {
  const { isOpen, onCancel, onClose } = useAlert();

  const { removeCustomLayout, activeLayout } = useLayout();

  return (
    <Alert
      isOpen={isOpen}
      confirmButtonText="Remove"
      cancelButtonText="Cancel"
      intent={Intent.DANGER}
      onCancel={onCancel}
      onClose={() => {
        // removeCustomLayout()

        onClose();
      }}
      canEscapeKeyCancel={true}
      icon="trash"
    >
      <h5 className="bp3-heading">
        Do you want to delete the PATTERN_NAME pattern?
      </h5>

      <p>This operation cannot be undone</p>
    </Alert>
  );
};

export default DeletePattern;
