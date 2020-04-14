import Place from '../interfaces/Place';

export type SearchHistoryItem = Pick<
  Place,
  'display_name' | 'place_id' | 'class' | 'lat' | 'lon'
>;
