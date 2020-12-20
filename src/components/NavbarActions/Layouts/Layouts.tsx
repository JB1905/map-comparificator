import React from 'react';
import {
  Button,
  ButtonGroup,
  Intent,
  Menu,
  MenuDivider,
  MenuItem,
  Popover,
  Position,
} from '@blueprintjs/core';
import { useTranslation } from 'react-i18next';
import equal from 'deep-equal';

import { useLayout } from 'hooks/useLayout';
import { useSettings } from 'hooks/useSettings';
import { useModal } from 'hooks/useModal';

import { ModalType } from 'enums/ModalType';

const Layouts = () => {
  const {
    activeLayout,
    isEmptyLayout,
    setActiveLayout,
    findExistingLayout,
    initialLayouts,
    customLayouts,
  } = useLayout();

  const { isCustomizationEnabled } = useSettings();

  const { openModal } = useModal();

  const { t } = useTranslation();

  const isPatternCreationDisabled =
    !!findExistingLayout() || customLayouts.length >= 6 || isEmptyLayout;

  return (
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
              <MenuDivider title={t('settings.customPattern.custom')} />

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
      <Button
        icon="layout-skew-grid"
        text={t('settings.customPattern.title')}
        disabled={!isCustomizationEnabled}
        minimal
      />
    </Popover>
  );
};

export default Layouts;
