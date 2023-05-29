import { useSelector } from 'react-redux';
import * as selectors from 'redux/seletors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectors.selectIsLoggedIn);
  const isRefreshing = useSelector(selectors.selectIsRefreshing);
  const userName = useSelector(selectors.selectUserName);

  return { isLoggedIn, isRefreshing, userName };
};
