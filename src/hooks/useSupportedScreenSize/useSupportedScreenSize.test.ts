import { renderHook } from '@testing-library/react-hooks';

import { useSupportedScreenSize } from '.';

// jest.mock('react-viewport-hooks', () => {})

// TODO
describe('useSupportedScreenSize', () => {
  it.skip('', () => {
    const { result } = renderHook(() => useSupportedScreenSize());

    expect(result).toBe(true);
  });
});
