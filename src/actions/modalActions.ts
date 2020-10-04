export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

// TODO any
export const openModal = (payload: Record<string, any>) => ({
  type: OPEN_MODAL,
  payload,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
