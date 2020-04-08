import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import { googleMapsToken } from '../config';

const GoogleMaps: React.FC = () => {
  const { coords, zoom } = useSelector((state: any) => state.maps);

  // const dispatch = useDispatch();

  return (
    <LoadScript id="script-loader" googleMapsApiKey={googleMapsToken}>
      <GoogleMap
        mapContainerStyle={{
          height: '100%',
          width: '100%',
        }}
        zoom={zoom}
        center={{
          lat: coords[0],
          lng: coords[1],
        }}
      ></GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;
