import { Map } from 'react-mapkit';

import { useMaps } from 'hooks/useMaps';

const AppleMaps = () => {
  const { coords } = useMaps();

  return (
    <Map
      tokenOrCallback={process.env.REACT_APP_APPLE_MAPS_TOKEN}
      center={coords}
    />
  );
};

// TODO
export default AppleMaps;
