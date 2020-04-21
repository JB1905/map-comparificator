import React from 'react';
import { useSelector } from 'react-redux';
import { Map } from 'react-mapkit';

import { RootState } from 'reducers';

const AppleMaps: React.FC = () => {
  const { coords, zoomLevel } = useSelector((state: RootState) => state.maps);

  return (
    <Map
      tokenOrCallback={process.env.REACT_APP_APPLE_MAPS_TOKEN}
      center={coords}
      // region={{
      //   latitude: 50,
      //   longitude: 20,
      //   latitudeSpan: 0.5,
      //   longitudeSpan: 0.5,
      // }}
    />
  );
};

export default AppleMaps;
