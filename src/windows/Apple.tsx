import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Map } from 'react-mapkit';

import { appleMapsToken } from '../config';

import { RootState } from '../reducers';

const AppleMaps: React.FC = () => {
  const { coords, zoom } = useSelector((state: RootState) => state.maps);

  const dispatch = useDispatch();

  return (
    <Map
      tokenOrCallback={appleMapsToken}
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
