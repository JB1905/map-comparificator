import { renderHook } from '@testing-library/react-hooks';

import { useGeolocation } from '.';

describe('useGeolocation', () => {
  it.skip('should', () => {
    const { result } = renderHook(() => useGeolocation());

    expect(result.current.isGeolocationAvailable).toBe(false);
  });

  it.skip('should', () => {
    const { result } = renderHook(() => useGeolocation());

    expect(result.current.isGeolocationAvailable).toBe(true);
  });

  it.skip('should', () => {
    const { result } = renderHook(() => useGeolocation());

    result.current.getGeolocation((coords) => {
      expect(coords).toBe(false);
    });
  });
});
