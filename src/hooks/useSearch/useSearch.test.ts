import { renderHook } from '@testing-library/react-hooks';

import { useSearch } from '.';

describe('useSearch', () => {
  const { result } = renderHook(() => useSearch());

  it('should', () => {
    expect(result.current);
  });
});
