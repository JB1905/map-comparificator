import { Alignment, Navbar } from '@blueprintjs/core';
import { useTranslation } from 'react-i18next';

import { ReactComponent as OctoCat } from 'assets/github.svg';

import CurrentGeolocation from 'components/NavbarActions/CurrentGeolocation';
import SearchForm from 'components/SearchForm';
import ThemeToggle from 'components/NavbarActions/ThemeToggle';
import Help from 'components/NavbarActions/Help';

import { useGeolocation } from 'hooks/useGeolocation';
import { useSupportedScreenSize } from 'hooks/useSupportedScreenSize';

import { isTouchDevice } from 'constants/isTouchDevice';

import './NavbarSecondaryGroup.scss';

const NavbarSecondaryGroup = () => {
  const { isGeolocationAvailable } = useGeolocation();

  const isSupportedScreenSize = useSupportedScreenSize();

  const { t } = useTranslation();

  return (
    <Navbar.Group align={Alignment.RIGHT}>
      {isSupportedScreenSize && (
        <>
          {isGeolocationAvailable && (
            <>
              <CurrentGeolocation />

              <Navbar.Divider />
            </>
          )}

          <SearchForm />

          <Navbar.Divider />
        </>
      )}

      <ThemeToggle />

      <Navbar.Divider />

      {isSupportedScreenSize && !isTouchDevice && (
        <>
          <Help />

          <Navbar.Divider />
        </>
      )}

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
