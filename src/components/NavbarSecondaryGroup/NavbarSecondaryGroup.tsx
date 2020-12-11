import { Alignment, Navbar, Button } from '@blueprintjs/core';
import { useTranslation } from 'react-i18next';
import { useHotkeys } from 'react-hotkeys-hook';

import { ReactComponent as OctoCat } from 'assets/github.svg';

import CurrentGeolocation from 'components/NavbarActions/CurrentGeolocation';
import SearchForm from 'components/SearchForm';
import ThemeToggle from 'components/NavbarActions/ThemeToggle';

import { useMaps } from 'hooks/useMaps';
import { useModal } from 'hooks/useModal';

import { ModalType } from 'enums/ModalType';
import { KeyboardShortcut } from 'enums/KeyboardShortcut';

import './NavbarSecondaryGroup.scss';

const NavbarSecondaryGroup = () => {
  const { isGeolocationAvailable } = useMaps();

  const { openModal } = useModal();

  const { t } = useTranslation();

  const showHelp = () => openModal(ModalType.Help);

  useHotkeys(KeyboardShortcut.OpenHelp, showHelp);

  return (
    <Navbar.Group align={Alignment.RIGHT}>
      {isGeolocationAvailable && (
        <>
          <CurrentGeolocation />

          <Navbar.Divider />
        </>
      )}

      <SearchForm />

      <Navbar.Divider />

      <ThemeToggle />

      <Navbar.Divider />

      <Button icon="help" onClick={showHelp} minimal />

      <Navbar.Divider />

      <a
        href="https://github.com/JB1905/map-comparificator"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('settings.github.label')}
      >
        <OctoCat className="octocat" />
      </a>
    </Navbar.Group>
  );
};

export default NavbarSecondaryGroup;
