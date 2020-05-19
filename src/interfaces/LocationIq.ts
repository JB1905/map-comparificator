export interface LocationIqResult {
  readonly place_id: string;
  readonly licence: string;
  readonly osm_type: string;
  readonly osm_id: string;
  readonly boundingbox: string[];
  readonly lat: string;
  readonly lon: string;
  readonly display_name: string;
  readonly class: string;
  readonly type: string;
  readonly importance: number;
  readonly icon?: string;
}

export interface LocationIqError {
  readonly error: string;
}
