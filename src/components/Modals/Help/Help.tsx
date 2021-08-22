import { Dialog, Text, Tag, Intent } from '@blueprintjs/core';
import { useTranslation } from 'react-i18next';

import { useModal } from 'hooks/useModal';
import { KeyboardShortcut } from 'constants/KeyboardShortcut';

import './Help.scss';

const badges = {
  [KeyboardShortcut.ToggleLock]: 'shortcut.toggleLock',
  [KeyboardShortcut.ToggleTheme]: 'shortcut.toggleTheme',
  [KeyboardShortcut.Geolocation]: 'shortcut.getGeolocation',
  [KeyboardShortcut.CloseAll]: 'shortcut.closeAllMaps',
  [KeyboardShortcut.OpenHelp]: 'shortcut.openHelp',
};

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
      className="help-dialog"
    >
      <div className="help-dialog-body">
        {Object.entries(badges).map(([shortcut, label]) => (
          <div className="help-badge">
            <Text className="help-badge-text">{t(label)}:</Text>

            <Tag large round className="help-badge-tag" intent={Intent.PRIMARY}>
              {shortcut.toUpperCase()}
            </Tag>
          </div>
        ))}
      </div>
    </Dialog>
  );
};

export default Help;
