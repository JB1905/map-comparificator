import { Alignment, Navbar, ButtonGroup } from '@blueprintjs/core';

import { ReactComponent as Logo } from 'assets/logo.svg';

import MapSuppliers from 'components/NavbarActions/MapSuppliers';
import CenteringModes from 'components/NavbarActions/CenteringModes';
import Layouts from 'components/NavbarActions/Layouts';
import LockToggle from 'components/NavbarActions/LockToggle';

import { useSupportedScreenSize } from 'hooks/useSupportedScreenSize';

import './NavbarPrimaryGroup.scss';

const NavbarPrimaryGroup = () => {
  const isSupportedScreenSize = useSupportedScreenSize();

  return (
    <Navbar.Group align={Alignment.LEFT}>
      <Navbar.Heading>
        <Logo className="logo" />
      </Navbar.Heading>

      {isSupportedScreenSize && (
        <>
          <ButtonGroup minimal>
            <Layouts />
            <CenteringModes />
            <MapSuppliers />
          </ButtonGroup>

          <Navbar.Divider />

          <LockToggle />
        </>
      )}
    </Navbar.Group>
  );
};

// TODO?
export default NavbarPrimaryGroup;
