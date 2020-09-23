import type { Layout } from 'types/Layout';

export const SET_ACTIVE_LAYOUT = 'SET_ACTIVE_LAYOUT';
export const CREATE_CUSTOM_LAYOUT = 'CREATE_CUSTOM_LAYOUT';
export const RENAME_CUSTOM_LAYOUT = 'RENAME_CUSTOM_LAYOUT';
export const REMOVE_CUSTOM_LAYOUT = 'REMOVE_CUSTOM_LAYOUT';

export const setActiveLayout = (payload: Layout) => ({
  type: SET_ACTIVE_LAYOUT,
  payload,
});

export const createCustomLayout = (payload: any) => ({
  type: CREATE_CUSTOM_LAYOUT,
  payload,
});

export const renameCustomLayout = (payload: any) => ({
  type: RENAME_CUSTOM_LAYOUT,
});

export const removeCustomLayout = (payload: string) => ({
  type: REMOVE_CUSTOM_LAYOUT,
  payload,
});
