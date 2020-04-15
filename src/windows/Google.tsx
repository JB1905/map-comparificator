import React from 'react';
import { useSelector } from 'react-redux';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import { RootState } from '../reducers';

const GoogleMaps: React.FC = () => {
  const { coords, zoomLevel } = useSelector((state: RootState) => state.maps);

  return (
    <LoadScript
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
