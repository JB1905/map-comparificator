import { Classes, Dialog } from '@blueprintjs/core';
import { useTranslation } from 'react-i18next';

import { useModal } from 'hooks/useModal';

const Help = () => {
  const { isOpen, setIsOpen, closeModal } = useModal();

  const { t } = useTranslation();

  return (
    <Dialog
      title={t('modal.help.title')}
      icon="help"
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onClosed={closeModal}
    >
      <div className={Classes.DIALOG_BODY}></div>
    </Dialog>
  );
};

export default Help;
