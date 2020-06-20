import { renderHook } from '@testing-library/react-hooks';

import { useAlert } from '.';

describe('useAlert', () => {
  const { result } = renderHook(() => useAlert());

  it('should', () => {});
});
