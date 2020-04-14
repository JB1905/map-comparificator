import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import { googleMapsToken } from '../config';

import { RootState } from '../reducers';

const GoogleMaps: React.FC = () => {
  const { coords, zoom } = useSelector((state: RootState) => state.maps);

  const dispatch = useDispatch();

  return (
    <LoadScript id="script-loader" googleMapsApiKey={googleMapsToken}>
      <GoogleMap
        mapContainerStyle={{ height: '100%', width: '100%' }}
        center={{ lat: coords[0], lng: coords[1] }}
        zoom={zoom}
      />
    </LoadScript>
  );
};

export default GoogleMaps;
