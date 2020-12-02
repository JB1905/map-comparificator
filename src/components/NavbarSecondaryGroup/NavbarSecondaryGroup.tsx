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
import { useHotkeys } from 'react-hotkeys-hook';

import { ReactComponent as OctoCat } from 'assets/github.svg';

import { MAPS } from 'collections/maps';

import { useLayout } from 'hooks/useLayout';
import { useSettings } from 'hooks/useSettings';
import { useModal } from 'hooks/useModal';

import { ModalType } from 'enums/ModalType';
import { KeyboardShortcut } from 'enums/KeyboardShortcut';

import './NavbarSecondaryGroup.scss';

const NavbarSecondaryGroup = () => {
  const {
    activeLayout,
    isEmptyLayout,
    setActiveLayout,
    findExistingLayout,
    initialLayouts,
    customLayouts,
    openLayoutWindow,
  } = useLayout();

  const {
    centeringModes,
    activeCenteringMode,
    setCenteringMode,
    isCustomizationEnabled,
    toggleCustomization,
  } = useSettings();

  const { openModal } = useModal();

  const { t } = useTranslation();

  useHotkeys(KeyboardShortcut.ToggleLock, toggleCustomization);

  const isPatternCreationDisabled =
    !!findExistingLayout() || customLayouts.length >= 6 || isEmptyLayout;

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
                onClick={() => openLayoutWindow(map)}
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

      <Popover
        content={
          <Menu>
            {centeringModes.map(({ name, value }) => (
              <MenuItem
                text={name}
                icon="locate"
                key={value}
                className="centering-mode"
                active={activeCenteringMode === value}
                onClick={() => setCenteringMode(value)}
              />
            ))}
          </Menu>
        }
        position={Position.TOP}
      >
        <Button
          icon="map-marker"
          text={t('settings.centeringMode.title')}
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
                <MenuDivider title={t('settings.customPattern.title')} />

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
                          onClick={(
                            e: React.MouseEvent<HTMLElement, MouseEvent>
                          ) => {
                            e.stopPropagation();

                            openModal(ModalType.Edit, { name, layout });
                          }}
                          intent={Intent.WARNING}
                        />

                        <Button
                          icon="trash"
                          small
                          onClick={(
                            e: React.MouseEvent<HTMLElement, MouseEvent>
                          ) => {
                            e.stopPropagation();

                            openModal(ModalType.Delete, { name, layout });
                          }}
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
              disabled={isPatternCreationDisabled}
              onClick={() => openModal(ModalType.Create)}
              intent={Intent.SUCCESS}
            />
          </Menu>
        }
        position={Position.TOP}
      >
        <Button icon="reset" disabled={!isCustomizationEnabled} minimal />
      </Popover>

      <Navbar.Divider />

      <Button icon="help" onClick={() => openModal(ModalType.Help)} minimal />

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
