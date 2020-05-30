import { LocationIqResult } from 'interfaces/LocationIq';

export type SearchHistoryItem = Pick<
  LocationIqResult,
  'display_name' | 'place_id' | 'class' | 'lat' | 'lon'
>;
