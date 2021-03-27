import { useViewport } from 'react-viewport-hooks';

const MIN_WINDOW_SIZE = 960;

export const useSupportedScreenSize = () => {
  const { vw } = useViewport({
    defaultVW: window.innerWidth,
  });

  const isSupportedScreenSize = vw > MIN_WINDOW_SIZE;

  return isSupportedScreenSize;
};
