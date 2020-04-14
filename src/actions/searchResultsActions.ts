import { LocationIqToken } from '../config';

export const SEARCH_LOADING = 'SEARCH_LOADING';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';

const searchLocationFetchPending = () => ({
  type: SEARCH_LOADING,
});

const searchLocationFetchSuccess = (data: any) => ({
  type: SEARCH_SUCCESS,
  payload: data,
});

const searchLocationFetchError = (err: any) => ({
  type: SEARCH_ERROR,
  payload: err,
});

export const searchLocation = (query: string) => async (dispatch: any) => {
  dispatch(searchLocationFetchPending());

  try {
    const res = await fetch(
      `https://eu1.locationiq.com/v1/search.php?key=${LocationIqToken}&q=${query}&format=json`
    );

    const data = await res.json();

    dispatch(searchLocationFetchSuccess(data));
  } catch (err) {
    dispatch(searchLocationFetchError(err));
  }
};
