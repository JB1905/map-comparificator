import { LocationIqToken } from '../config';

export const search = async (query: string) => {
  const res = await fetch(
    `https://eu1.locationiq.com/v1/search.php?key=${LocationIqToken}&q=${query}&format=json`
  );

  const data = res.json();

  return data;
};
