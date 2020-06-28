import { renderHook } from '@testing-library/react-hooks';

import { useModal } from '.';

describe('useModal', () => {
  const { result } = renderHook(() => useModal());

  it('should', () => {});
});
