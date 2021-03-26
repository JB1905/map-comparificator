import { useDispatch } from 'react-redux';

import { useTypedSelector } from 'hooks/useTypedSelector';

import * as Actions from 'store/actions';

export const useCustomization = () => {
  const dispatch = useDispatch();

  const { isCustomizationEnabled } = useTypedSelector(
    (state) => state.customization
  );

  const toggleCustomization = () => {
    dispatch(Actions.toggleCustomization());
  };

  return {
    isCustomizationEnabled,
    toggleCustomization,
  };
};
