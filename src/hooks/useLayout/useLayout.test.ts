import { renderHook } from '@testing-library/react-hooks';

import { useLayout } from '.';

describe('useLayout', () => {
  const { result } = renderHook(() => useLayout());

  it('should', () => {
    expect(result.current.activeLayout);
  });

  it('should', () => {
    expect(result.current.initialLayouts);
  });

  it('should', () => {
    expect(result.current.customLayouts);
  });

  it('should', () => {
    expect(result.current.isEmptyLayout);
  });

  it('should', () => {
    expect(result.current.openWindow);
  });

  it('should', () => {
    expect(result.current.setActiveLayout);
  });

  it('should', () => {
    expect(result.current.createCustomLayout);
  });
});
