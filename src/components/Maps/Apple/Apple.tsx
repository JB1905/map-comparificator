import { Map } from 'react-mapkit';

import { useMaps } from 'hooks/useMaps';

const AppleMaps = () => {
  const { coords } = useMaps();

  return (
    <Map
    // TODO
      tokenOrCallback={process.env.REACT_APP_APPLE_MAPS_TOKEN}
      center={coords}
    />
  );
};

export default AppleMaps;
