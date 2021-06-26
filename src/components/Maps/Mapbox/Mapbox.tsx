import ReactMapGL, { ViewportProps } from 'react-map-gl';
import { useCallback } from 'react';

import { useMaps } from 'hooks/useMaps';
import { useTheme } from 'hooks/useTheme';

type HandleViewportChangeCallback = (e: ViewportProps) => void

// TODO update map implementation
const Mapbox = () => {
  const {
    coords: [latitude, longitude],
    zoomLevel,
    // setCoords,
    // setZoomLevel,
  } = useMaps();

  const { isDark } = useTheme();

  const handleViewportChange = useCallback<HandleViewportChangeCallback>((e) => {
    // setCoords([e.latitude, e.longitude]);
    // setZoomLevel(e.zoom);
  }, [])

  return (
    <ReactMapGL
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      width="100%"
      height="100%"
      latitude={latitude}
      longitude={longitude}
      zoom={zoomLevel}
      onViewportChange={handleViewportChange}
      mapStyle={`mapbox://styles/mapbox/${isDark ? 'dark' : 'streets'}-v9`}
    />
  );
};

export default Mapbox;
