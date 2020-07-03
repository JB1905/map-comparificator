import React from 'react';
import { render } from '@testing-library/react';

import { useModal } from 'hooks/useModal';

import RootModal from '.';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: () => '',
  }),
}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: () => ({
    activeLayout: {},
  }),
}));

jest.mock('hooks/useModal', () => ({
  useModal: jest.fn(),
}));

describe('RootModal', () => {
  it('should render fallback when modalType is not defined', () => {
    useModal.mockImplementation(() => ({
      modalType: null,
    }));

    const { container } = render(<RootModal />);

    expect(container.firstChild).toBe(null);
  });
});
