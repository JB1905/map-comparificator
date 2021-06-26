import { render } from '@testing-library/react';

import RootModal from './RootModal';

import { useModal } from 'hooks/useModal';

// TODO

// jest.mock('hooks/useModal', () => ({
//   useModal: jest.fn(),
// }));

describe('RootModal', () => {
  it.skip('should', () => {
    (useModal as jest.Mock).mockImplementation(() => ({
      modalType: null,
    }));

    const {} = render(<RootModal />);
  });

  // it.skip('should', () => {
  //   (useModal as jest.Mock).mockImplementation(() => ({
  //     modalType: 'Create Pattern',
  //   }));

  //   const {} = render(<RootModal />);
  // });
});
