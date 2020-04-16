import React from 'react';
import {
  Alignment,
  Navbar,
  Button,
  Popover,
  Menu,
  Position,
  MenuItem,
} from '@blueprintjs/core';
import equal from 'deep-equal';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'react-mosaic-component/react-mosaic-component.css';

import { ReactComponent as OctoCat } from '../assets/github.svg';

import { ELEMENT_MAP } from '../map';

import { useLayout } from '../hooks/useLayout';
import { useSettings } from '../hooks/useSettings';

import { centeringModes } from '../constants/centeringModes';

const NavbarSecondaryGroup: React.FC = () => {
  const {
    activeLayout,
    isEmptyLayout,
    setLayout,
    availableLayouts,
    setLayoutAsPattern,
    customLayouts,
  } = useLayout();

  const {
    activeCenteringMode,
    setCenteringMode,
    customizationEnabled,
    toggleCustomization,
  } = useSettings();

  return (
    <Navbar.Group align={Alignment.RIGHT}>
      <Button
        icon={customizationEnabled ? 'unlock' : 'lock'}
        onClick={toggleCustomization}
        disabled={isEmptyLayout}
        minimal
      />

      <Navbar.Divider />

      <Popover
        content={
          <Menu>
            {Object.keys(ELEMENT_MAP).map((map) => (
              <MenuItem text={map} icon="send-to-map" key={map} />
            ))}
          </Menu>
        }
        position={Position.TOP}
      >
        <Button
          icon="map"
          text="Maps"
          disabled={!customizationEnabled}
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
            {availableLayouts.map(({ name, layout }) => (
              <MenuItem
                text={name}
                icon="page-layout"
                key={name}
                active={equal(activeLayout, layout)}
                onClick={() => setLayout(layout)}
              />
            ))}

            {customLayouts?.map(({ name, layout }) => (
              <MenuItem
                text={name}
                icon="page-layout"
                key={name}
                active={equal(activeLayout, layout)}
                onClick={() => setLayout(layout)}
              />
            ))}

            <MenuItem
              text="Save as Pattern"
              icon="floppy-disk"
              disabled={isEmptyLayout}
              onClick={setLayoutAsPattern}
            />
          </Menu>
        }
        position={Position.TOP}
      >
        <Button icon="reset" disabled={!customizationEnabled} minimal />
      </Popover>

      <Navbar.Divider />

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
