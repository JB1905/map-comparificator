import { Button, Menu, MenuItem, Popover } from '@blueprintjs/core';
import { useTranslation } from 'react-i18next';

import { useLayout } from 'hooks/useLayout';
import { useCenteringModes } from 'hooks/useCenteringModes';

const CenteringModes = () => {
  const { isEmptyLayout } = useLayout();

  const {
    centeringModes,
    activeCenteringMode,
    setCenteringMode,
  } = useCenteringModes();

  const { t } = useTranslation();

  return (
    <Popover
      // disabled={isEmptyLayout}
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
    >
      <Button
        icon="map-marker"
        text={t('settings.centeringMode.title')}
        onClick={(e: any) => {
          e.preventDefault();
        }}
        disabled={isEmptyLayout}
        minimal
      />
    </Popover>
  );
};

export default CenteringModes;
