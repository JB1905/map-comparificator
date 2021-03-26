import { Button, Menu, MenuItem } from '@blueprintjs/core';
import { Popover2 } from '@blueprintjs/popover2';
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
    <Popover2
      disabled={isEmptyLayout}
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
        disabled={isEmptyLayout}
        minimal
      />
    </Popover2>
  );
};

export default CenteringModes;
