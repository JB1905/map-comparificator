import { Classes, Dialog, Text, Tag, Intent } from '@blueprintjs/core';
import { useTranslation } from 'react-i18next';

import { useModal } from 'hooks/useModal';
import { KeyboardShortcut } from 'enums/KeyboardShortcut';

const badges = {
  [KeyboardShortcut.ToggleLock]: 'shortcut.toggleLock',
  [KeyboardShortcut.ToggleTheme]: 'shortcut.toggleTheme',
  [KeyboardShortcut.Geolocation]: 'shortcut.getGeolocation',
  [KeyboardShortcut.CloseAll]: 'shortcut.closeAllMaps',
  [KeyboardShortcut.OpenHelp]: 'shortcut.openHelp',
}

// TODO
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
      style={{ paddingBottom: 0 }} // TODO
    >
      <div className={Classes.DIALOG_BODY}>
        {Object.entries(badges).map(([shortcut, label]) => (
          // TODO
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Text>{t(label)}:</Text>
            <Tag
              large
              round
              style={{ width: 70, textAlign: 'center' }} // TODO
              intent={Intent.PRIMARY}
            >
              {shortcut.toUpperCase()}
            </Tag>
          </div>
        ))}
      </div>
    </Dialog>
  );
};

export default Help;
