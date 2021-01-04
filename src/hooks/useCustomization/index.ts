import { useSelector, useDispatch } from 'react-redux';

import * as Actions from 'store/actions';

import { RootState } from 'store/reducers';

export const useCustomization = () => {
  const dispatch = useDispatch();

  const { isCustomizationEnabled } = useSelector(
    (state: RootState) => state.customization
  );

  const toggleCustomization = () => {
    dispatch(Actions.toggleCustomization());
  };

  return {
    isCustomizationEnabled,
    toggleCustomization,
  };
};
