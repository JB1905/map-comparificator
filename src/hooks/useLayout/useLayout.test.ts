import { renderHook } from '@testing-library/react-hooks';

import { useLayout } from '.';

describe('useLayout', () => {
  it('should', () => {
    const { result } = renderHook(() => useLayout());
  });
});
