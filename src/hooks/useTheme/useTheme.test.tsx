import { act, renderHook } from '@testing-library/react-hooks';

import { useTheme } from '.';

describe('useTheme', () => {
  const { result } = renderHook(() => useTheme());

  // it.each
  it('should set theme', () => {
    expect(result.current.activeTheme).toBe(null);

    act(() => {
      // result.current.setTheme('dark');
    });
  });

  it('should toggle theme', () => {
    expect(result.current.activeTheme).toBe(null);

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.activeTheme).toBe(null);
  });
});
