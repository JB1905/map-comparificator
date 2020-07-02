import React, { useState } from 'react';
import { Alert, Intent, InputGroup } from '@blueprintjs/core';
import { useTranslation } from 'react-i18next';

import { useModal } from 'hooks/useModal';
import { useLayout } from 'hooks/useLayout';

import { AppToaster } from 'helpers/toaster';

const CreatePattern: React.FC = () => {
  const { isOpen, setIsOpen, closeModal } = useModal();

  const { findExistingLayout, createCustomLayout } = useLayout();

  const { t } = useTranslation();

  const [name, setName] = useState('');

  const onConfirm = () => {
    if (!name) {
      return AppToaster.show({
        message: t('message.patternNameRequired'),
        intent: Intent.WARNING,
      });
    }

    if (!findExistingLayout(name, true)) {
      createCustomLayout(name);

      setIsOpen(false);

      AppToaster.show({
        message: t('message.patternCreated'),
        intent: Intent.SUCCESS,
      });
    } else {
      AppToaster.show({
        message: t('message.patternExists', { name }),
        // message: `The pattern ${name} already exists!`,
        intent: Intent.DANGER,
      });
    }
  };

  return (
    <Alert
      isOpen={isOpen}
      confirmButtonText={t('pattern.confirm.add')}
      cancelButtonText={t('pattern.cancel')}
      intent={Intent.SUCCESS}
      onConfirm={onConfirm}
      onCancel={() => setIsOpen(false)}
      onClosed={closeModal}
      canEscapeKeyCancel={true}
      icon="add"
    >
      <h5 className="bp3-heading">{t('modal.patternCreate.title')}</h5>

      <InputGroup
        placeholder={t('modal.patternCreate.input.placeholder')}
        aria-label={t('modal.patternCreate.input.label')}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
    </Alert>
  );
};

export default CreatePattern;
