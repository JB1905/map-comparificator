import { renderHook } from '@testing-library/react-hooks';

import { useTheme } from '.';

describe('useTheme', () => {
  const { result } = renderHook(() => useTheme());

  it('should check active theme', () => {
    expect(result.current.activeTheme).toBe('dark');
  });

  it('should check if dark theme is active', () => {
    expect(result.current.isDark).toBe(true);
  });

  it('should toggle theme', () => {
    expect(result.current.toggleTheme());
  });
});
