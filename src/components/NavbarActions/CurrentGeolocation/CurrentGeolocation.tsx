import { useCallback } from 'react';
import { Button } from '@blueprintjs/core';
import { useHotkeys } from 'react-hotkeys-hook';

import { useGeolocation } from 'hooks/useGeolocation';
import { useMaps } from 'hooks/useMaps';
import { useLayout } from 'hooks/useLayout';

import { KeyboardShortcut } from 'enums/KeyboardShortcut';

const CurrentGeolocation = () => {
  const { getGeolocation, hasGeolocationPermission } = useGeolocation();
  

  const { setCoords } = useMaps();

  const { isEmptyLayout } = useLayout();

  const getCurrentLocation = useCallback(() => {
    getGeolocation(({ latitude, longitude }) => {
      setCoords([latitude, longitude]);
    });
  }, [getGeolocation, setCoords]);

  useHotkeys(KeyboardShortcut.Geolocation, getCurrentLocation);

  return (
    <Button
      icon="geolocation"
      onClick={getCurrentLocation}
      disabled={isEmptyLayout || !hasGeolocationPermission}
      minimal
    />
  );
};

export default CurrentGeolocation;
