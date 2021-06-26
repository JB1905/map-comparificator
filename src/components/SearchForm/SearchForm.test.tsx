import { fireEvent, render } from '@testing-library/react';

import SearchForm from './SearchForm';

// jest.mock('hooks/useSearchResults', () => ({
//   useSearchResults: () => ({
//     results: [],
//     isLoading: false,
//     error: undefined,
//     query: '',
//     setQuery: jest.fn(),
//   }),
// }));

// jest.mock('hooks/useSearchHistory', () => ({
//   useSearchHistory: () => ({
//     history: [],
//     addToHistory: jest.fn(),
//     removeFromHistory: jest.fn(),
//   }),
// }));

// jest.mock('hooks/useLayout', () => ({
//   useLayout: () => ({
//     isEmptyLayout: false,
//   }),
// }));

// jest.mock('hooks/useMaps', () => ({
//   useMaps: () => ({
//     setCoords: jest.fn(),
//   }),
// }));

// jest.mock('react-i18next', () => ({
//   useTranslation: () => ({
//     t: jest.fn(),
//   }),
// }));

describe('SearchForm', () => {
  it.skip('should fill search input', () => {
    const { container } = render(<SearchForm />);

    const input = container.querySelector(
      '[type="search"]'
    ) as HTMLInputElement;

    expect(input).toBeInTheDocument();

    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: 'Paris' } });

    expect(input.value).toBe('Paris');
  });

  // TODO more tests
});
