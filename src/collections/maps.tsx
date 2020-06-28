import React, { lazy } from 'react';

import { LazyComponent } from 'components/LazyComponent';

const AppleMaps = lazy(() => import('maps/Apple'));
const BingMaps = lazy(() => import('maps/Bing'));
const GoogleMaps = lazy(() => import('maps/Google'));
const HereMaps = lazy(() => import('maps/Here'));
const Mapbox = lazy(() => import('maps/Mapbox'));
const OpenStreetMap = lazy(() => import('maps/OSM'));

export const MAPS: Record<string, JSX.Element> = {
  'Apple Maps': <LazyComponent component={<AppleMaps />} />,
  'Bing Maps': <LazyComponent component={<BingMaps />} />,
  'Google Maps': <LazyComponent component={<GoogleMaps />} />,
  'Here Maps': <LazyComponent component={<HereMaps />} />,
  Mapbox: <LazyComponent component={<Mapbox />} />,
  'Open Street Map': <LazyComponent component={<OpenStreetMap />} />,
};
