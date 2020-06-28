import React from 'react';
import ReactMapGL, { ViewportProps } from 'react-map-gl';

import { useMaps } from 'hooks/useMaps';
import { useTheme } from 'hooks/useTheme';

const Mapbox: React.FC = () => {
  const { coords, zoomLevel, setCoords, setZoomLevel } = useMaps();

  const { isDark } = useTheme();

  const onViewportChange = (e: ViewportProps) => {
    setCoords([e.latitude, e.longitude]);

    setZoomLevel(e.zoom);
  };

  return (
    <ReactMapGL
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      width="100%"
      height="100%"
      latitude={coords[0]}
      longitude={coords[1]}
      zoom={zoomLevel}
      onViewportChange={onViewportChange}
      mapStyle={`mapbox://styles/mapbox/${isDark ? 'dark' : 'streets'}-v9`}
    />
  );
};

export default Mapbox;
