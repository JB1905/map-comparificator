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
import { useTranslation } from 'react-i18next';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'react-mosaic-component/react-mosaic-component.css';

import { ReactComponent as OctoCat } from 'assets/github.svg';

import { MAPS } from 'collections/maps';

import { useLayout } from 'hooks/useLayout';
import { useSettings } from 'hooks/useSettings';
import { useModal } from 'hooks/useModal';

import { CenteringMode } from 'enums/CenteringMode';
import { ModalType } from 'enums/ModalType';

import './NavbarSecondaryGroup.scss';

import { isFeatureEnabled } from 'features';

const NavbarSecondaryGroup = () => {
  const {
    activeLayout,
    isEmptyLayout,
    setActiveLayout,
    findExistingLayout,
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

  const { openModal } = useModal();

  const { t } = useTranslation();

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
          text={t('settings.maps')}
          disabled={!isCustomizationEnabled}
          minimal
        />
      </Popover>

      <Navbar.Divider />

      {isFeatureEnabled('centeringModes') && (
        <>
          <Popover
            content={
              <Menu>
                {Object.values(CenteringMode).map((centeringMode) => (
                  <MenuItem
                    text={centeringMode}
                    icon="locate"
                    key={centeringMode} // TODO
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
              text={t('settings.centeringMode')}
              disabled={isEmptyLayout}
              minimal
            />
          </Popover>

          <Navbar.Divider />
        </>
      )}

      <Popover
        content={
          <Menu>
            {initialLayouts.map((
              { name, layout }: any // TODO
            ) => (
              <MenuItem
                text={name}
                icon="page-layout"
                key={name}
                active={equal(activeLayout, layout)}
                onClick={() => setActiveLayout(layout)}
              />
            ))}

            {isFeatureEnabled('managePatterns') && (
              <>
                {customLayouts.length > 0 && (
                  <>
                    <MenuDivider title={t('settings.customPattern.title')} />

                    {customLayouts.map((
                      { name, layout }: any // TODO
                    ) => (
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
                              onClick={() =>
                                openModal(ModalType.Edit, { name, layout })
                              }
                              intent={Intent.WARNING}
                            />

                            <Button
                              icon="trash"
                              small
                              onClick={() =>
                                openModal(ModalType.Delete, { name, layout })
                              }
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
                  text={t('settings.customPattern.save')}
                  icon="floppy-disk"
                  disabled={
                    !!findExistingLayout() ||
                    customLayouts.length >= 6 ||
                    isEmptyLayout
                  }
                  onClick={() => openModal(ModalType.Create)}
                  intent={Intent.SUCCESS}
                />
              </>
            )}
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
        aria-label={t('settings.github.label')}
      >
        <OctoCat className="octocat" />
      </a>
    </Navbar.Group>
  );
};

export default NavbarSecondaryGroup;
