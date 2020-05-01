import React from 'react';
import {
  Alignment,
  Navbar,
  Button,
  Popover,
  Menu,
  Position,
  MenuItem,
  MenuDivider,
} from '@blueprintjs/core';
import equal from 'deep-equal';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'react-mosaic-component/react-mosaic-component.css';

import { ReactComponent as OctoCat } from 'assets/github.svg';

// import PatternEditor from 'containers/PatternEditor';

import { ELEMENT_MAP } from 'map';

import { useLayout } from 'hooks/useLayout';
import { useSettings } from 'hooks/useSettings';

import { centeringModes } from 'constants/centeringModes';

import './NavbarSecondaryGroup.scss';

const NavbarSecondaryGroup: React.FC = () => {
  const {
    activeLayout,
    isEmptyLayout,
    setActiveLayout,
    initialLayouts,
    // setLayoutAsPattern,
    customLayouts,
    openWindow,
  } = useLayout();

  const {
    activeCenteringMode,
    setCenteringMode,
    isCustomizationEnabled,
    toggleCustomization,
  } = useSettings();

  return (
    <Navbar.Group align={Alignment.RIGHT}>
      <Button
        icon={isCustomizationEnabled ? 'unlock' : 'lock'}
        onClick={toggleCustomization}
        disabled={isEmptyLayout}
        minimal
      />

      <Navbar.Divider />

      <Popover
        content={
          <Menu>
            {Object.keys(ELEMENT_MAP).map((map) => (
              <MenuItem
                text={map}
                icon="send-to-map"
                key={map}
                disabled={JSON.stringify(activeLayout).includes(map)}
                onClick={() => openWindow(map)}
              />
            ))}
          </Menu>
        }
        position={Position.TOP}
      >
        <Button
          icon="map"
          text="Maps"
          disabled={!isCustomizationEnabled}
          minimal
        />
      </Popover>

      <Navbar.Divider />

      <Popover
        content={
          <Menu>
            {centeringModes.map((centeringMode) => (
              <MenuItem
                text={centeringMode}
                icon="locate"
                key={centeringMode}
                className="centering-mode"
                active={activeCenteringMode === centeringMode}
                onClick={() => setCenteringMode(centeringMode)}
              />
            ))}
          </Menu>
        }
        position={Position.TOP}
      >
        <Button
          icon="map-marker"
          text="Centering Mode"
          disabled={isEmptyLayout}
          minimal
        />
      </Popover>

      <Navbar.Divider />

      <Popover
        content={
          <Menu>
            {initialLayouts.concat(customLayouts).map(({ name, layout }) => (
              <MenuItem
                text={name}
                icon="page-layout"
                key={name}
                active={equal(activeLayout, layout)}
                onClick={() => setActiveLayout(layout)}
              />
            ))}

            {/* {?.map(({ name, layout }) => (
              <MenuItem
                text={name}
                icon="page-layout"
                key={name}
                active={equal(activeLayout, layout)}
                onClick={() => setActiveLayout(layout)}
              />
            ))} */}

            <MenuDivider />

            <MenuItem
              text="Save as Pattern"
              icon="floppy-disk"
              disabled={isEmptyLayout}
            />
          </Menu>
        }
        position={Position.TOP}
      >
        <Button icon="reset" disabled={!isCustomizationEnabled} minimal />
      </Popover>

      <Navbar.Divider />

      {/* <PatternEditor /> */}

      <a
        href="https://github.com/JB1905/map-comparificator"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Preview code on GitHub"
      >
        <OctoCat className="octocat" />
      </a>
    </Navbar.Group>
  );
};

export default NavbarSecondaryGroup;
