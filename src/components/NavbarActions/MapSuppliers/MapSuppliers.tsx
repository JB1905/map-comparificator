import { Button, Menu, MenuItem, Popover } from '@blueprintjs/core';
import { useTranslation } from 'react-i18next';

import { useLayout } from 'hooks/useLayout';
import { useSettings } from 'hooks/useSettings';

import { MAPS } from 'collections/maps';

const MapSuppliers = () => {
  const { activeLayout, openLayoutWindow } = useLayout();

  const { isCustomizationEnabled } = useSettings();

  const { t } = useTranslation();

  return (
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
    >
      <Button
        icon="map"
        text={t('settings.maps')}
        disabled={!isCustomizationEnabled}
        minimal
      />
    </Popover>
  );
};

export default MapSuppliers;
