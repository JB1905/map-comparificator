import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from 'hooks/useTypedSelector';

import * as Actions from 'store/actions';

export const useCustomization = () => {
  const dispatch = useDispatch();

  const { isCustomizationEnabled } = useTypedSelector(
    (state) => state.customization
  );

  const toggleCustomization = useCallback(() => {
    dispatch(Actions.toggleCustomization());
  }, [dispatch]);

  return {
    isCustomizationEnabled,
    toggleCustomization,
  };
};
