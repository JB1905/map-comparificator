import { useCallback, useState } from 'react';
import * as React from 'react';
import { Alert, Intent, InputGroup } from '@blueprintjs/core';
import { useTranslation } from 'react-i18next';

import { useModal } from 'hooks/useModal';
import { useLayout } from 'hooks/useLayout';

import { AppToaster } from 'config/toaster';

const CreatePattern = () => {
  const { isOpen, setIsOpen, closeModal } = useModal();

  const { findExistingLayout, createCustomLayout } = useLayout();

  const { t } = useTranslation();

  const [name, setName] = useState('');

  const handleConfirm = useCallback(() => {
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
        intent: Intent.DANGER,
      });
    }
  }, [createCustomLayout, findExistingLayout, name, setIsOpen, t]);

  return (
    <Alert
      isOpen={isOpen}
      confirmButtonText={t('pattern.confirm.add')}
      cancelButtonText={t('pattern.cancel')}
      intent={Intent.SUCCESS}
      onConfirm={handleConfirm}
      onCancel={() => setIsOpen(false)}
      onClosed={closeModal}
      canEscapeKeyCancel
      icon="add"
    >
      <h5 className="bp3-heading">{t('modal.patternCreate.title')}</h5>

      <InputGroup
        placeholder={t('modal.patternCreate.input.placeholder')}
        aria-label={t('modal.patternCreate.input.label')}
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

export default CreatePattern;
