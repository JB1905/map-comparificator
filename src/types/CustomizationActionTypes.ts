import { TOGGLE_CUSTOMIZATION } from 'store/actions';

export interface CustomizationState {
  readonly isCustomizationEnabled: boolean;
}

interface ToggleCustomizationAction {
  readonly type: typeof TOGGLE_CUSTOMIZATION;
}

export type CustomizationActionTypes = ToggleCustomizationAction;
