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
  Intent,
  ButtonGroup,
} from '@blueprintjs/core';
import equal from 'deep-equal';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'react-mosaic-component/react-mosaic-component.css';

import { ReactComponent as OctoCat } from 'assets/github.svg';

import { MAPS } from 'collections/maps';

import { useLayout } from 'hooks/useLayout';
import { useSettings } from 'hooks/useSettings';
import { useAlert } from '../../hooks/useAlert';

import { CenteringMode } from 'enums/CenteringMode';
import { AlertType } from 'enums/AlertType';

import './NavbarSecondaryGroup.scss';

const NavbarSecondaryGroup: React.FC = () => {
  const {
    activeLayout,
    isEmptyLayout,
    setActiveLayout,
    findExistingLayout,
    removeCustomLayout,
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

  const { openAlert } = useAlert();

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
            {Object.keys(MAPS).map((map) => (
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
            {initialLayouts.map(({ name, layout }) => (
              <MenuItem
                text={name}
                icon="page-layout"
                key={name}
                active={equal(activeLayout, layout)}
                onClick={() => setActiveLayout(layout)}
              />
            ))}

            {customLayouts.length > 0 && (
              <>
                <MenuDivider title="Custom Patterns" />

                {customLayouts.map(({ name, layout }) => (
                  <MenuItem
                    text={name}
                    icon="page-layout"
                    key={name}
                    active={equal(activeLayout, layout)}
                    onClick={() => setActiveLayout(layout)}
                    labelElement={
                      <ButtonGroup>
                        <Button
                          icon="edit"
                          small
                          onClick={() => openAlert(AlertType.Edit)}
                          intent={Intent.WARNING}
                        />

                        <Button
                          icon="trash"
                          small
                          onClick={() => openAlert(AlertType.Delete)}
                          intent={Intent.DANGER}
                        />
                      </ButtonGroup>
                    }
                  />
                ))}
              </>
            )}

            <MenuDivider />

            <MenuItem
              text="Save as Pattern"
              icon="floppy-disk"
              // disabled={
              //   !!findExistingLayout() ||
              //   customLayouts.length >= 6 ||
              //   isEmptyLayout
              // }
              onClick={() => openAlert(AlertType.Create)}
              intent={Intent.SUCCESS}
            />
          </Menu>
        }
        position={Position.TOP}
      >
        <Button icon="reset" disabled={!isCustomizationEnabled} minimal />
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
