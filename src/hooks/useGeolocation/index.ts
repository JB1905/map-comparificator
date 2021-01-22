import { useCallback } from 'react';

type GetGeolocationCallback = (
  currentCoords: (coords: GeolocationCoordinates) => void
) => void;

export const useGeolocation = () => {
  const isGeolocationAvailable = 'geolocation' in navigator;

  // TODO permission
  const getGeolocation = useCallback<GetGeolocationCallback>(
    (currentCoords) => {
      navigator.geolocation.getCurrentPosition((position) => {
        currentCoords(position.coords);
      });
    },
    []
  );

  return {
    isGeolocationAvailable,
    getGeolocation,
  };
};
