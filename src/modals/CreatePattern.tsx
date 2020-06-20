import React, { useState } from 'react';
import {
  Alert,
  Intent,
  InputGroup,
  // Toast, Toaster,
} from '@blueprintjs/core';

import { useAlert } from 'hooks/useAlert';
import { useLayout } from 'hooks/useLayout';

const CreatePattern: React.FC = () => {
  const { isOpen, onSave, onClose } = useAlert();

  // const [isOpen, setIsOpen] = useState(true);

  const { createCustomLayout, findExistingLayout } = useLayout();

  const [name, setName] = useState('');
  // const [error, setError] = useState('')

  // const onClose = () => {
  //   setIsOpen(false);

  //   setTimeout(() => {
  //     closeAlert();
  //   }, 300);
  // };

  // const onSave = () => {
  //     if (!findExistingLayout(name)) {
  //         createCustomLayout(name)

  //         onClose()
  //     } else {
  //         // setError('')
  //     }
  // }

  return (
    <Alert
      isOpen={isOpen}
      confirmButtonText="Save"
      cancelButtonText="Cancel"
      intent={Intent.SUCCESS}
      onCancel={onClose}
      onClose={onSave}
      canEscapeKeyCancel={true}
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
