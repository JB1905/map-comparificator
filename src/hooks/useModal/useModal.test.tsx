import { renderHook } from '@testing-library/react-hooks';

import { useModal } from '.';

describe('useModal', () => {
  it('should', () => {
    const { result } = renderHook(() => useModal());

    expect(result.current.isOpen).toBe(false);
  });
});
