import { TOGGLE_CUSTOMIZATION } from 'store/actions';

export interface CustomizationState {
  readonly isCustomizationEnabled: boolean;
}

export interface ToggleCustomizationAction {
  readonly type: typeof TOGGLE_CUSTOMIZATION;
}
