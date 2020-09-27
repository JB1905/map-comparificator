import React from 'react';
import { Alert, Intent } from '@blueprintjs/core';
import { useTranslation } from 'react-i18next';

import { useModal } from 'hooks/useModal';
import { useLayout } from 'hooks/useLayout';

import { AppToaster } from 'helpers/toaster';

const DeletePattern = () => {
  const { isOpen, setIsOpen, closeModal, modalParams } = useModal();

  const { removeCustomLayout } = useLayout();

  const { t } = useTranslation();

  const handleConfirm = () => {
    removeCustomLayout(modalParams!.name);

    setIsOpen(false);

    AppToaster.show({
      message: t('message.patternDeleted'),
      intent: Intent.SUCCESS,
    });
  };

  return (
    <Alert
      isOpen={isOpen}
      confirmButtonText={t('pattern.confirm.delete')}
      cancelButtonText={t('pattern.cancel')}
      intent={Intent.DANGER}
      onConfirm={handleConfirm}
      onCancel={() => setIsOpen(false)}
      onClosed={closeModal}
      canEscapeKeyCancel={true}
      icon="trash"
    >
      <h5 className="bp3-heading">
        {t('modal.patternDelete.title', { name: modalParams!.name })}
        {/* Do you want to delete the {modalParams!.name} pattern? */}
      </h5>

      <p>{t('modal.patternDelete.message')}</p>
    </Alert>
  );
};

export default DeletePattern;
