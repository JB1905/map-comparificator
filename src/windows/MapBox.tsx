import React from 'react';
import ReactMapGL from 'react-map-gl';
import { useSelector, useDispatch } from 'react-redux';

import { useTheme } from '../hooks/useTheme';

import { Theme } from '../enums/Theme';

import { RootState } from '../reducers';

// import { UPDATE_COORDS } from '../actions';

const MapBox: React.FC = () => {
  const { coords, zoomLevel } = useSelector((state: RootState) => state.maps);

  const dispatch = useDispatch();

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
        console.log(e);
        // dispatch({ type: UPDATE_COORDS, payload: [e.latitude, e.longitude] });
      }}
    />
  );
};

export default MapBox;
