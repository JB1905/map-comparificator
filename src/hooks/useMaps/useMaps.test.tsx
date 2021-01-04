import { renderHook } from '@testing-library/react-hooks';

import { useMaps } from '.';

describe('useMaps', () => {
  it('should', () => {
    const { result } = renderHook(() => useMaps());

    // expect(result.current)
  });
});
