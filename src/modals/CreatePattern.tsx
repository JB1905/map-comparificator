import React, { useState } from 'react';
import { Alert, Intent, InputGroup } from '@blueprintjs/core';

import { useModal } from 'hooks/useModal';
import { useLayout } from 'hooks/useLayout';

import { AppToaster } from 'helpers/toaster';

const CreatePattern: React.FC = () => {
  const { isOpen, closeModal, setIsOpen } = useModal();

  const { findExistingLayout, createCustomLayout } = useLayout();

  const [name, setName] = useState('');

  const onConfirm = () => {
    if (!name) {
      return AppToaster.show({
        message: 'Pattern name is required!',
        intent: Intent.WARNING,
      });
    }

    if (!findExistingLayout(name)) {
      createCustomLayout(name);

      setIsOpen(false);

      AppToaster.show({
        message: 'Pattern created!',
        intent: Intent.SUCCESS,
      });
    } else {
      AppToaster.show({
        message: 'Pattern already exists!',
        intent: Intent.DANGER,
      });
    }
  };

  return (
    <Alert
      isOpen={isOpen}
      confirmButtonText="Save"
      cancelButtonText="Cancel"
      intent={Intent.SUCCESS}
      onConfirm={onConfirm}
      onCancel={() => setIsOpen(false)}
      onClosed={closeModal}
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
