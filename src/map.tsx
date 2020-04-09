import React from 'react';

import AppleMaps from './windows/Apple';
import BingMaps from './windows/Bing';
import GoogleMaps from './windows/Google';
import HereMaps from './windows/Here';
import OpenStreetMap from './windows/OSM';
import MapBox from './windows/MapBox';

export const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {
  'Apple Maps': <AppleMaps />,
  'Bing Maps': <BingMaps />,
  'Google Maps': <GoogleMaps />,
  'Here Maps': <HereMaps />,
  MapBox: <MapBox />,
  'Open Street Map': <OpenStreetMap />,
};
