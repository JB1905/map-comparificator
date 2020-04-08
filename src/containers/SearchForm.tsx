import React from 'react';

const SearchForm: React.FC = () => {
  const submit = (e: any) => {
    // console.log(e.target.value);
    // dispatch({ type: SEARCH, payload: '' });
  };

  return (
    <input
      className="bp3-input"
      placeholder="Search..."
      type="text"
      onChange={submit}
      // onKeyDown={submit}
    />
  );
};

export default SearchForm;
