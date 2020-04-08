import React from 'react';

// export interface IFilm {
//   /** Title of film. */
//   title: string;
//   /** Release year. */
//   year: number;
//   /** IMDb ranking. */
//   rank: number;
// }

// const FilmSelect = Select.ofType<IFilm>();

const SelectMenu: React.FC = () => {
  const submit = (e: any) => {
    // console.log(e.target.value);
    // dispatch({ type: SEARCH, payload: '' });
  };

  return (
    <></>
    //        <FilmSelect
    //     items={items}
    //     itemPredicate={Films.itemPredicate}
    //     itemRenderer={Films.itemRenderer}
    //     noResults={<MenuItem disabled={true} text="No results." />}
    //     onItemSelect={...}
    // >
    //     <Button text={Films.items[0].title} rightIcon="double-caret-vertical" />
    // </FilmSelect>
  );
};

export default SelectMenu;
