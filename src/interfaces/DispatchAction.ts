import { Action } from 'redux';

export interface DispatchAction<T> extends Action {
  payload: Partial<T>;
}
