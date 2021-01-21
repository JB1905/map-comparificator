import { renderHook } from '@testing-library/react-hooks';

import { useGeolocation } from '.';

describe('useGeolocation', () => {
  it('should', () => {
    const { result } = renderHook(() => useGeolocation());

    expect(result.current.isGeolocationAvailable).toBe(false);
  });

  it('should', () => {
    const { result } = renderHook(() => useGeolocation());

    expect(result.current.isGeolocationAvailable).toBe(true);
  });

  it('should', () => {
    const { result } = renderHook(() => useGeolocation());

    result.current.getGeolocation((coords) => {
      expect(coords).toBe(false);
    });
  });
});
