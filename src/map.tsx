import React from 'react';

import AppleMaps from './tiles/Apple';
import BingMaps from './tiles/Bing';
import GoogleMaps from './tiles/Google';
import HereMaps from './tiles/Here';
import OpenStreetMap from './tiles/OSM';
import MapBox from './tiles/MapBox';

export const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {
  'Apple Maps': <AppleMaps />,
  'Bing Maps': <BingMaps />,
  'Google Maps': <GoogleMaps />,
  'Here Maps': <HereMaps />,
  MapBox: <MapBox />,
  'Open Street Map': <OpenStreetMap />,
};
