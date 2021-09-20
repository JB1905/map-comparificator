import { Alignment, Navbar } from '@blueprintjs/core';

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

      <GitHubLink />
    </Navbar.Group>
  );
};

// TODO?
export default NavbarSecondaryGroup;
