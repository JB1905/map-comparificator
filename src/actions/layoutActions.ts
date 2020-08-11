export const SET_ACTIVE_LAYOUT = 'SET_ACTIVE_LAYOUT';
export const CREATE_CUSTOM_LAYOUT = 'CREATE_CUSTOM_LAYOUT';
export const RENAME_CUSTOM_LAYOUT = 'RENAME_CUSTOM_LAYOUT';
export const REMOVE_CUSTOM_LAYOUT = 'REMOVE_CUSTOM_LAYOUT';

export const setActiveLayout = () => ({
  type: SET_ACTIVE_LAYOUT,
});

export const createCustomLayout = () => ({
  type: CREATE_CUSTOM_LAYOUT,
});

export const renameCustomLayout = () => ({
  type: RENAME_CUSTOM_LAYOUT,
});

export const removeCustomLayout = (payload: string) => ({
  type: REMOVE_CUSTOM_LAYOUT,
  payload,
});
