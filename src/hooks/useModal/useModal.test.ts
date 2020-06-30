import { renderHook, act } from '@testing-library/react-hooks';

import { useModal } from '.';

describe('useModal', () => {
  it('should toggle isOpen value', () => {
    const { result } = renderHook(() => useModal());

    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.setIsOpen(false);
    });

    expect(result.current.isOpen).toBe(false);
  });
});
