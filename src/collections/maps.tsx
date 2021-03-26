import { lazy } from 'react';
import * as React from 'react';

import LazyComponent from 'components/LazyComponent';

const AppleMaps = lazy(() => import('components/Maps/Apple'));
const BingMaps = lazy(() => import('components/Maps/Bing'));
const GoogleMaps = lazy(() => import('components/Maps/Google'));
const HereMaps = lazy(() => import('components/Maps/Here'));
const Mapbox = lazy(() => import('components/Maps/Mapbox'));
const OpenStreetMap = lazy(() => import('components/Maps/OSM'));

export const MAPS: Record<string, React.ReactNode> = {
  'Apple Maps': <LazyComponent component={<AppleMaps />} />,
  'Bing Maps': <LazyComponent component={<BingMaps />} />,
  'Google Maps': <LazyComponent component={<GoogleMaps />} />,
  'Here Maps': <LazyComponent component={<HereMaps />} />,
  Mapbox: <LazyComponent component={<Mapbox />} />,
  'Open Street Map': <LazyComponent component={<OpenStreetMap />} />,
};
