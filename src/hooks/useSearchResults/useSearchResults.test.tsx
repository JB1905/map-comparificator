import { renderHook } from '@testing-library/react-hooks';

import { useSearchResults } from '.';

describe('useSearchResults', () => {
  it('should', () => {
    const { result } = renderHook(() => useSearchResults(), {});

    // expect(result.current)
  });
});
