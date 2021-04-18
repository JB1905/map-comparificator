import ReactMapGL, { ViewportProps } from 'react-map-gl';

import { useMaps } from 'hooks/useMaps';
import { useTheme } from 'hooks/useTheme';

// TODO
const Mapbox = () => {
  const {
    coords: [latitude, longitude],
    zoomLevel,
    // setCoords,
    // setZoomLevel,
  } = useMaps();

  const { isDark } = useTheme();

  const handleViewportChange = (e: ViewportProps) => {
    // setCoords([e.latitude, e.longitude]);
    // setZoomLevel(e.zoom);
  };

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
