import { Alignment, Navbar, ButtonGroup } from '@blueprintjs/core';

import { ReactComponent as Logo } from 'assets/logo.svg';

import MapSuppliers from 'components/NavbarActions/MapSuppliers';
import CenteringModes from 'components/NavbarActions/CenteringModes';
import Layouts from 'components/NavbarActions/Layouts';
import LockToggle from 'components/NavbarActions/LockToggle';
import HistoryActions from 'components/NavbarActions/HistoryActions';

import './NavbarPrimaryGroup.scss';

const NavbarPrimaryGroup = () => (
  <Navbar.Group align={Alignment.LEFT}>
    <Navbar.Heading>
      <Logo className="logo" />
    </Navbar.Heading>

    <ButtonGroup minimal>
      <Layouts />

      <CenteringModes />

      <MapSuppliers />
    </ButtonGroup>

    <Navbar.Divider />

    <LockToggle />

    {/* <Navbar.Divider />

    <HistoryActions /> */}
  </Navbar.Group>
);

export default NavbarPrimaryGroup;
