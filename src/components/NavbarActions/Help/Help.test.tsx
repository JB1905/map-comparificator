import { render } from '@testing-library/react';

import Help from './Help';

// TODO
// jest.mock('react-hotkeys-hook', () => ({
//   useHotkeys: jest.fn(),
// }));

// TODO
// jest.mock('hooks/useModal', () => ({
//   useModal: () => ({
//     openModal: jest.fn(),
//   }),
// }));

describe('Help', () => {
  it.skip('should render component', () => {
    const {} = render(<Help />);
  });
});
