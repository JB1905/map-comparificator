import React from 'react';
import { Alert, Intent, InputGroup } from '@blueprintjs/core';

import { useAlert } from 'hooks/useAlert';
import { useLayout } from 'hooks/useLayout';

const EditPattern: React.FC = () => {
  const { isOpen, onClose, onSave } = useAlert();

  const {
    // renameCustomLayout,
    activeLayout,
  } = useLayout();

  // const DURATION = 300;

  // const onClose = () => {
  //   // setIsOpen(false);

  //   setTimeout(() => {
  //     closeAlert();
  //   }, DURATION);
  // };

  // const onSave = () => {
  //   // ed(activeLayout)

  //   onClose()
  //   // } else {
  //   //   // setError('')
  //   // }
  // }

  return (
    <Alert
      isOpen={isOpen}
      confirmButtonText="Rename"
      cancelButtonText="Cancel"
      intent={Intent.WARNING}
      onCancel={onClose}
      onClose={onSave}
      canEscapeKeyCancel={true}
      icon="edit"
    >
      <h5 className="bp3-heading">Rename PATTERN_NAME:</h5>

      <InputGroup
        placeholder="Type new pattern name"
        aria-label="Type new pattern name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => null}
      />
    </Alert>
  );
};

export default EditPattern;
