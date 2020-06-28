import React, { useState } from 'react';
import {
  Alert,
  Intent,
  InputGroup,
  Toaster,
  Position,
} from '@blueprintjs/core';

import { useAlert } from 'hooks/useAlert';
import { useLayout } from 'hooks/useLayout';

const AppToaster = Toaster.create({
  className: 'recipe-toaster',
  position: Position.TOP,
});

const CreatePattern: React.FC = () => {
  const { isOpen, onCancel, onClose } = useAlert();

  const { createCustomLayout, findExistingLayout } = useLayout();

  const [name, setName] = useState('');

  return (
    <Alert
      isOpen={isOpen}
      confirmButtonText="Save"
      cancelButtonText="Cancel"
      intent={Intent.SUCCESS}
      onCancel={onCancel}
      onClose={() => {
        console.log(findExistingLayout(name));

        AppToaster.show({ message: 'Hello' });

        if (!findExistingLayout(name)) {
          createCustomLayout(name);

          onClose();
        } else {
        }
      }}
      canEscapeKeyCancel={!name}
      icon="add"
    >
      <h5 className="bp3-heading">Create new pattern:</h5>

      <InputGroup
        placeholder="Type pattern name"
        aria-label="Type pattern name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
    </Alert>
  );
};

export default CreatePattern;
