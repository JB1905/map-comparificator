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

    if (modalParams!.name === name) {
      return AppToaster.show({
        message: 'The new pattern name must be different from the old name!',
        intent: Intent.DANGER,
      });
    }

    if (!findExistingLayout(name, true)) {
      renameCustomLayout(modalParams!.name, name);

      setIsOpen(false);

      AppToaster.show({
        message: 'Pattern name changed!',
        intent: Intent.SUCCESS,
      });
    } else {
      AppToaster.show({
        message: `Pattern ${name} already exists!`,
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
      <h5 className="bp3-heading">Rename {modalParams!.name}:</h5>

      <InputGroup
        placeholder="Enter a new name for the pattern"
        aria-label="Enter a new name for the pattern"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
    </Alert>
  );
};

export default EditPattern;
