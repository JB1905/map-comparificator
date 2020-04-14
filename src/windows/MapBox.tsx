import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import { useSelector, useDispatch } from 'react-redux';

import { useTheme } from '../hooks/useTheme';

import { mapBoxToken } from '../config';

import { Theme } from '../enums/Theme';

import { RootState } from '../reducers';

const Map = ReactMapboxGl({
  accessToken: mapBoxToken,
});

const MapBox: React.FC = () => {
  const { coords, zoomLevel } = useSelector((state: RootState) => state.maps);

  const dispatch = useDispatch();

  const { activeTheme } = useTheme();

  return (
    <Map
      style={`mapbox://styles/mapbox/${
        activeTheme === Theme.Dark ? 'dark' : 'streets'
      }-v9`}
      containerStyle={{ height: '100%', width: '100%' }}
      center={[coords[1], coords[0]]}
      // zoom={[zoomLevel]}
      // onMove={(e) => console.log(e.transform._zoom)}
      // onZoom={(e) => console.log(e)}
    />
  );
};

export default MapBox;
