import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const GoogleMaps: React.FC = () => {
  const coords = useSelector((state: any) => state.maps.coords);
  const zoom = useSelector((state: any) => state.maps.zoom);

  // const dispatch = useDispatch();

  return (
    <LoadScript
      id="script-loader"
      googleMapsApiKey="AIzaSyC0BpmC7-EzEWo397NvKmD5tROjPFD9hvs"
    >
      <GoogleMap
        mapContainerStyle={{
          height: '100%',
          width: '100%'
        }}
        zoom={zoom}
        center={{
          lat: coords[0],
          lng: coords[1]
        }}
      ></GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;
