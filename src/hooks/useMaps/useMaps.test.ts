import { renderHook } from '@testing-library/react-hooks';

import { useMaps } from '.';

describe('useMaps', () => {
  const { result } = renderHook(() => useMaps());

  it('should get current coords', () => {
    result.current.getGeolocation((coords) => {
      expect(coords).not.toBe(null);
    });
  });

  it('should set new coords', () => {
    const coords: [number, number] = [20, 10];

    result.current.setCoords(coords);

    expect(result.current.coords).toBe(coords);
  });

  it('should set new zoom level', () => {
    const zoomLevel = 6;

    result.current.setZoomLevel(zoomLevel);

    expect(result.current.zoomLevel).toBe(zoomLevel);
  });
});
