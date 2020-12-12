import { Dialog, Classes, Tag } from '@blueprintjs/core';
import { useTranslation } from 'react-i18next';

import { useModal } from 'hooks/useModal';

import { KeyboardShortcut } from 'enums/KeyboardShortcut';

const Help = () => {
  const { isOpen, setIsOpen, closeModal } = useModal();

  const { t } = useTranslation();

  return (
    <Dialog
      icon="info-sign"
      onClose={() => setIsOpen(false)}
      onClosed={closeModal}
      title={t('modal.help.title')}
      isOpen={isOpen}
      style={{ paddingBottom: 0 }} // TODO
    >
      <div className={Classes.DIALOG_BODY}>
        {Object.entries(KeyboardShortcut).map(([key, value]) => (
          <div key={key}>
            {/* <p>{key} {value}</p> */}
            <Tag
              large
              minimal
              // intent="primary"
            >
              {value}
            </Tag>
          </div>
        ))}
      </div>
    </Dialog>
  );
};

export default Help;
