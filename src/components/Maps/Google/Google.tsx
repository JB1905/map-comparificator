import { GoogleMap, LoadScript } from '@react-google-maps/api';

import { useMaps } from 'hooks/useMaps';

const GoogleMaps = () => {
  const {
    coords: [lat, lng],
    zoomLevel,
  } = useMaps();

  return (
    <LoadScript
      id="script-loader"
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_TOKEN!}
    >
      <GoogleMap
        mapContainerStyle={{ height: '100%', width: '100%' }}
        center={{ lat, lng }}
        zoom={zoomLevel}
      />
    </LoadScript>
  );
};

export default GoogleMaps;
