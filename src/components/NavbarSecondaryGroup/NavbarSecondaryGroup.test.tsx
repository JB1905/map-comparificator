import { render } from '@testing-library/react';

import NavbarSecondaryGroup from './NavbarSecondaryGroup';

// TODO

// jest.mock('react-i18next', () => ({
//   useTranslation: () => ({
//     t: jest.fn(),
//   }),
// }));

// jest.mock('hooks/useGeolocation', () => ({
//   useGeolocation: () => ({
//     isGeolocationAvailable: false,
//   }),
// }));

// jest.mock('components/NavbarActions/CurrentGeolocation', () => () => (
//   <p>CurrentGeolocation</p>
// ));
// jest.mock('components/SearchForm', () => () => <p>SearchForm</p>);
// jest.mock('components/NavbarActions/ThemeToggle', () => () => (
//   <p>ThemeToggle</p>
// ));
// jest.mock('components/NavbarActions/Help', () => () => <p>Help</p>);

describe('NavbarSecondaryGroup', () => {
  it.skip('should', () => {
    const { getByText } = render(<NavbarSecondaryGroup />);

    expect(getByText('SearchForm')).toBeInTheDocument();
    expect(getByText('ThemeToggle')).toBeInTheDocument();
    expect(getByText('Help')).toBeInTheDocument();
  });

  it.skip('should render CurrentGeolocation', () => {
    // isGeolocationAvailable true
  });

  it.skip('should not render CurrentGeolocation', () => {
    // isGeolocationAvailable false
  });

  // TODO move to Link component
  it.skip('should', () => {
    const { container } = render(<NavbarSecondaryGroup />);

    // TODO no querySelector
    expect(
      container.querySelector(
        // TODO move url to const
        '[href="https://github.com/JB1905/map-comparificator"]'
      )
    ).toBeInTheDocument();
    // TODO no querySelector
    expect(container.querySelector('.octocat')).toBeInTheDocument();
  });
});
