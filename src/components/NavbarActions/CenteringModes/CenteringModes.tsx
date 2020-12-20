import { Button, Menu, MenuItem, Popover, Position } from '@blueprintjs/core';
import { useTranslation } from 'react-i18next';

import { useLayout } from 'hooks/useLayout';
import { useSettings } from 'hooks/useSettings';

const CenteringModes = () => {
  const { isEmptyLayout } = useLayout();

  const {
    centeringModes,
    activeCenteringMode,
    setCenteringMode,
  } = useSettings();

  const { t } = useTranslation();

  return (
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
  );
};

export default CenteringModes;
