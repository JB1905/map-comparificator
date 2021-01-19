export const useGeolocation = () => {
  const isGeolocationAvailable = 'geolocation' in navigator;

  // TODO permission
  const getGeolocation = (
    currentCoords: (coords: GeolocationCoordinates) => void
  ) => {
    navigator.geolocation.getCurrentPosition((position) => {
      currentCoords(position.coords);
    });
  };

  return {
    isGeolocationAvailable,
    getGeolocation,
  };
};
