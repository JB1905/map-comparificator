import { render } from '@testing-library/react';
import { useViewport } from 'react-viewport-hooks';

import App from './App';

jest.mock('react-viewport-hooks', () => ({
  useViewport: jest.fn(),
}));

// TODO
// jest.mock('react-viewport-hooks', () => ({
//   useViewport: jest.fn(),
// }));

describe('App', () => {
  it.skip('should render mosaic grid', () => {
    (useViewport as jest.Mock).mockImplementation(() => ({
      vw: 1024,
    }));

    const { container } = render(<App />);

    expect(
      container.querySelector('.mosaic-blueprint-theme')
    ).toBeInTheDocument();
  });

  it.skip('should render fallback screen for mobile', () => {
    (useViewport as jest.Mock).mockImplementation(() => ({
      vw: 680,
    }));

    const { container } = render(<App />);

    expect(
      container.querySelector('.not-supported-screen-size')
    ).toBeInTheDocument();
  });

  it.todo('should apply dark theme to layout')
  it.todo('should enable customization')
  it.todo('should set language to EN')
  it.todo('should clear layout on keyboard shortcut')
  it.todo('should set language to PL')
});
