import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import s from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={s.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={s.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
