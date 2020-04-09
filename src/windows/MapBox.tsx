import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import { useSelector, useDispatch } from 'react-redux';

import { useTheme } from '../hooks/useTheme';

import { mapBoxToken } from '../config';

import { Theme } from '../enums/Theme';

const Map = ReactMapboxGl({
  accessToken: mapBoxToken,
});

const MapBox: React.FC = () => {
  const { coords, zoom } = useSelector((state: any) => state.maps);

  const dispatch = useDispatch();

  const { appearance } = useTheme();

  return (
    <Map
      style={`mapbox://styles/mapbox/${
        appearance === Theme.Dark ? 'dark' : 'streets'
      }-v9`}
      containerStyle={{ height: '100%', width: '100%' }}
      center={coords.reverse()}
      // zoom={zoom}
      // onMove={(e) => console.log(e)}
    />
  );
};

export default MapBox;
