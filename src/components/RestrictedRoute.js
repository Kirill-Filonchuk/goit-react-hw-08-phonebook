import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

// Цель ограничивающего маршрута - перебросить Юзера после залогинивания на страницу сонтактов:
// /Узнать, что залогинены
