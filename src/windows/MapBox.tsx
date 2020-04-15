import React from 'react';
import ReactMapGL from 'react-map-gl';
import { useSelector } from 'react-redux';

import { useTheme } from '../hooks/useTheme';
import { useGeolocation } from '../hooks/useGeolocation';

import { Theme } from '../enums/Theme';

import { RootState } from '../reducers';

const MapBox: React.FC = () => {
  const { coords, zoomLevel } = useSelector((state: RootState) => state.maps);

  const { setCoords, setZoomLevel } = useGeolocation();

  const { activeTheme } = useTheme();

  return (
    <ReactMapGL
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      width="100%"
      height="100%"
      latitude={coords[0]}
      longitude={coords[1]}
      zoom={zoomLevel}
      mapStyle={`mapbox://styles/mapbox/${
        activeTheme === Theme.Dark ? 'dark' : 'streets'
      }-v9`}
      onViewportChange={(e) => {
        // console.log(e);
        setCoords([e.latitude, e.longitude]);

        setZoomLevel(e.zoom);
      }}
    />
  );
};

export default MapBox;
