import { act, renderHook } from '@testing-library/react-hooks';

import { useTheme } from '.';

// TODO
describe('useTheme', () => {
  const wrapper = ({ children }) => (
    <Provider store={null}>{children}</Provider>
  );

  const { result } = renderHook(() => useTheme(), { wrapper });

  // it.each
  // it('should set theme', () => {
  //   expect(result.current.activeTheme).toBe(null);

  //   act(() => {
  //     // result.current.setTheme('dark');
  //   });
  // });

  it.skip('should toggle theme', () => {
    const themesList = Object.keys(result.current.themes);

    expect(result.current.activeTheme).toBe(themesList[0]);

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.activeTheme).toBe(themesList[1]);

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.activeTheme).toBe(themesList[2]);

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.activeTheme).toBe(themesList[0]);
  });
});
