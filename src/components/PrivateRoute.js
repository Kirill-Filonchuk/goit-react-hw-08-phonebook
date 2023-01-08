import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldBeRedirect = !isLoggedIn && !isRefreshing;
  return shouldBeRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
