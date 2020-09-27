import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import { useMaps } from 'hooks/useMaps';

const GoogleMaps = () => {
  const { coords, zoomLevel } = useMaps();

  return (
    <LoadScript
      data-testid="google-maps"
      id="script-loader"
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_TOKEN}
    >
      <GoogleMap
        mapContainerStyle={{ height: '100%', width: '100%' }}
        center={{ lat: coords[0], lng: coords[1] }}
        zoom={zoomLevel}
      />
    </LoadScript>
  );
};

export default GoogleMaps;
