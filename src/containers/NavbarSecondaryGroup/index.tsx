import React, { useState } from 'react';
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

import { MenuListItem } from 'components/MenuListItem';

import { ReactComponent as OctoCat } from 'assets/github.svg';

import PatternEditor from 'containers/PatternEditor';

import { ELEMENT_MAP } from 'map';

import { useLayout } from 'hooks/useLayout';
import { useSettings } from 'hooks/useSettings';

import { CenteringMode } from 'enums/CenteringMode';

import './NavbarSecondaryGroup.scss';

const NavbarSecondaryGroup: React.FC = () => {
  const {
    activeLayout,
    isEmptyLayout,
    setActiveLayout,

    initialLayouts,
    customLayouts,
    openWindow,
  } = useLayout();

  const {
    activeCenteringMode,
    setCenteringMode,
    isCustomizationEnabled,
    toggleCustomization,
  } = useSettings();

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  // TODO cleanup
  const layoutExists = () => {
    return [...initialLayouts, ...customLayouts].find(
      (layout) => JSON.stringify(layout.layout) === JSON.stringify(activeLayout)
    );
  };

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
            {Object.values(CenteringMode).map((centeringMode) => (
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
            {/* TODO fix element */}
            {initialLayouts.concat(customLayouts).map(({ name, layout }) => (
              <MenuListItem
                text={name}
                icon="page-layout"
                key={name}
                active={equal(activeLayout, layout)}
                onClick={() => setActiveLayout(layout)}
                // buttonProps={{
                //   onClick: () => null,
                // }}
              />
            ))}

            <MenuDivider />

            {/* TODO cleanup */}
            <MenuItem
              text="Save as Pattern"
              icon="floppy-disk"
              disabled={isEmptyLayout}
              onClick={() => !layoutExists() && setIsAlertOpen(true)}
            />
          </Menu>
        }
        position={Position.TOP}
      >
        <Button icon="reset" disabled={!isCustomizationEnabled} minimal />
      </Popover>

      <Navbar.Divider />

      {/* TODO cleanup */}
      <PatternEditor
        isOpen={isAlertOpen}
        onCancel={() => setIsAlertOpen(false)}
      />

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
