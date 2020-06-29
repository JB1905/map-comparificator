import React, { useState } from 'react';
import { Alert, Intent, InputGroup } from '@blueprintjs/core';

import { useModal } from 'hooks/useModal';
import { useLayout } from 'hooks/useLayout';

import { AppToaster } from 'helpers/toaster';

const EditPattern: React.FC = () => {
  const { isOpen, setIsOpen, closeModal, modalParams } = useModal();

  const { findExistingLayout, renameCustomLayout } = useLayout();

  const [name, setName] = useState('');

  const onConfirm = () => {
    if (!name) {
      return AppToaster.show({
        message: 'Pattern name is required!',
        intent: Intent.WARNING,
      });
    }

    if (!findExistingLayout(name)) {
      renameCustomLayout(name);

      setIsOpen(false);

      AppToaster.show({
        message: 'Pattern renamed!',
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
      confirmButtonText="Rename"
      cancelButtonText="Cancel"
      intent={Intent.WARNING}
      onConfirm={onConfirm}
      onCancel={() => setIsOpen(false)}
      onClosed={closeModal}
      canEscapeKeyCancel={true}
      icon="edit"
    >
      <h5 className="bp3-heading">Rename {modalParams.name}:</h5>

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
