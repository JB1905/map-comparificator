import { Button, Menu, MenuItem, Popover } from '@blueprintjs/core';
import { useTranslation } from 'react-i18next';

import { useLayout } from 'hooks/useLayout';
import { useCustomization } from 'hooks/useCustomization';

import { MAPS } from 'collections/maps';

const MapSuppliers = () => {
  const { activeLayout, openLayoutWindow } = useLayout();

  const { isCustomizationEnabled } = useCustomization();

  const { t } = useTranslation();

  return (
    <Popover
      // disabled={!isCustomizationEnabled}
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
