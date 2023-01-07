import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldBeRedirect = !isLoggedIn && !isRefreshing;
  return shouldBeRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

// Цель приватного маршрута - перебросить Юзера после залогинивания и рефреша на домашнюю страницу (напр.) - если рефреш прошел неудачно (false) или он разлогирован (false), в противном случае оставить его на странице контактов:
