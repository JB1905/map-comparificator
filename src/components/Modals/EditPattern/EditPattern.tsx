import { useState } from 'react';
import * as React from 'react';
import { Alert, Intent, InputGroup } from '@blueprintjs/core';
import { useTranslation } from 'react-i18next';

import { useModal } from 'hooks/useModal';
import { useLayout } from 'hooks/useLayout';

import { AppToaster } from 'config/toaster';

const EditPattern = () => {
  const { isOpen, setIsOpen, closeModal, modalParams } = useModal();

  const { findExistingLayout, renameCustomLayout } = useLayout();

  const { t } = useTranslation();

  const [name, setName] = useState('');

  const handleConfirm = () => {
    if (!modalParams) {
      return;
    }

    if (!name) {
      return AppToaster.show({
        message: t('message.patternNameRequired'),
        intent: Intent.WARNING,
      });
    }

    if (modalParams.name === name) {
      return AppToaster.show({
        message: t('message.patternProvideDifferentName'),
        intent: Intent.DANGER,
      });
    }

    if (!findExistingLayout(name)) {
      renameCustomLayout(modalParams.name, name);

      setIsOpen(false);

      AppToaster.show({
        message: t('message.patternNameChanged'),
        intent: Intent.SUCCESS,
      });
    } else {
      AppToaster.show({
        message: t('message.patternExists', { name }),
        intent: Intent.DANGER,
      });
    }
  };

  return (
    <Alert
      isOpen={isOpen}
      confirmButtonText={t('pattern.confirm.edit')}
      cancelButtonText={t('pattern.cancel')}
      intent={Intent.WARNING}
      onConfirm={handleConfirm}
      onCancel={() => setIsOpen(false)}
      onClosed={closeModal}
      canEscapeKeyCancel
      icon="edit"
    >
      <h5 className="bp3-heading">
        {t('modal.patternEdit.title', { name: modalParams?.name })}
      </h5>

      <InputGroup
        placeholder={t('modal.patternEdit.input.placeholder')}
        aria-label={t('modal.patternEdit.input.label')}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleConfirm();
          }
        }}
      />
    </Alert>
  );
};

export default EditPattern;
