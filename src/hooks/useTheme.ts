import { useSelector } from 'react-redux';

export const useTheme = () => {
  const appearance = useSelector((state: any) => state.theme.appearance);

  return { appearance };
};
