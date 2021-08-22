import { LocationIqResult } from 'types/LocationIq';

export type SearchHistoryItem = Pick<
  LocationIqResult,
  'display_name' | 'place_id' | 'class' | 'lat' | 'lon'
>;
