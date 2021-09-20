import { useCallback } from 'react';
import { Alert, Intent } from '@blueprintjs/core';
import { useTranslation } from 'react-i18next';

import { useModal } from 'hooks/useModal';
import { useLayout } from 'hooks/useLayout';

import { AppToaster } from 'config/toaster';

const DeletePattern = () => {
  const { isOpen, setIsOpen, closeModal, modalParams } = useModal();

  const { removeCustomLayout } = useLayout();

  const { t } = useTranslation();

  const handleConfirm = useCallback(() => {
    if (!modalParams) {
      return;
    }

    removeCustomLayout(modalParams.name);

    setIsOpen(false);

    AppToaster.show({
      message: t('message.patternDeleted'),
      intent: Intent.SUCCESS,
    });
  }, [modalParams, removeCustomLayout, setIsOpen, t]);

  return (
    <Alert
      isOpen={isOpen}
      confirmButtonText={t('pattern.confirm.delete')}
      cancelButtonText={t('pattern.cancel')}
      intent={Intent.DANGER}
      onConfirm={handleConfirm}
      onCancel={() => setIsOpen(false)}
      onClosed={closeModal}
      canEscapeKeyCancel
      icon="trash"
    >
      <h5 className="bp3-heading">
        {t('modal.patternDelete.title', { name: modalParams?.name })}
      </h5>

      <p>{t('modal.patternDelete.message')}</p>
    </Alert>
  );
};

// TODO
export default DeletePattern;
