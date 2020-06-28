import React, { useState } from 'react';
import { Alert, Intent, InputGroup } from '@blueprintjs/core';

import { useAlert } from 'hooks/useAlert';
import { useLayout } from 'hooks/useLayout';

const EditPattern: React.FC = () => {
  const { isOpen, onCancel, onClose } = useAlert();

  const [name, setName] = useState('');

  const { findExistingLayout, activeLayout } = useLayout();

  return (
    <Alert
      isOpen={isOpen}
      confirmButtonText="Rename"
      cancelButtonText="Cancel"
      intent={Intent.WARNING}
      onCancel={onCancel}
      onClose={() => {
        if (!findExistingLayout(name)) {
          onClose();
        } else {
        }
      }}
      canEscapeKeyCancel={true}
      icon="edit"
    >
      <h5 className="bp3-heading">Rename PATTERN_NAME:</h5>

      <InputGroup
        placeholder="Type new pattern name"
        aria-label="Type new pattern name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
    </Alert>
  );
};

export default EditPattern;
