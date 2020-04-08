export const useGeolocation = () => {
  const getCoords = (currentCoords: (coords: Coordinates) => void) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        currentCoords(position.coords);
      });
    }
  };

  return { getCoords };
};
