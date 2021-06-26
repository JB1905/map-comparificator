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

  it.skip('should', () => {
    const { container } = render(<NavbarSecondaryGroup />);

    expect(
      container.querySelector(
        '[href="https://github.com/JB1905/map-comparificator"]'
      )
    ).toBeInTheDocument();
    expect(container.querySelector('.octocat')).toBeInTheDocument();
  });
});
