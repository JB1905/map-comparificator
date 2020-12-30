import { lazy } from 'react';
import * as React from 'react';
import { withErrorBoundary } from 'react-error-boundary';

import LazyComponent from 'components/LazyComponent';

const AppleMaps = withErrorBoundary(
  lazy(() => import('components/Maps/Apple')),
  { fallback: null }
);
const BingMaps = withErrorBoundary(
  lazy(() => import('components/Maps/Bing')),
  { fallback: null }
);
const GoogleMaps = withErrorBoundary(
  lazy(() => import('components/Maps/Google')),
  { fallback: null }
);
const HereMaps = withErrorBoundary(
  lazy(() => import('components/Maps/Here')),
  { fallback: null }
);
const Mapbox = withErrorBoundary(
  lazy(() => import('components/Maps/Mapbox')),
  { fallback: null }
);
const OpenStreetMap = withErrorBoundary(
  lazy(() => import('components/Maps/OSM')),
  { fallback: null }
);

export const MAPS: Record<string, React.ReactNode> = {
  'Apple Maps': <LazyComponent component={<AppleMaps />} />,
  'Bing Maps': <LazyComponent component={<BingMaps />} />,
  'Google Maps': <LazyComponent component={<GoogleMaps />} />,
  'Here Maps': <LazyComponent component={<HereMaps />} />,
  Mapbox: <LazyComponent component={<Mapbox />} />,
  'Open Street Map': <LazyComponent component={<OpenStreetMap />} />,
};
