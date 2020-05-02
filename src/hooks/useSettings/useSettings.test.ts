import { renderHook } from '@testing-library/react-hooks';

import { useSettings } from '.';

import { CenteringMode } from 'enums/CenteringMode';

describe('useSettings', () => {
  const { result } = renderHook(() => useSettings());

  it('should check active centering mode', () => {
    expect(result.current.activeCenteringMode).toBe('true');
  });

  it('should check if customization is enabled', () => {
    expect(result.current.isCustomizationEnabled).toBe('true');
  });

  it('should set centering mode', () => {
    expect(result.current.setCenteringMode(CenteringMode.Center)).toBe('true');
  });

  it('should toggle customization', () => {
    expect(result.current.toggleCustomization()).toBe('true');
  });
});
