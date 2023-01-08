import { Navigation } from '../Navigation/Navigation';
import { useAuth } from 'hooks';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import s from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  // console.log(isLoggedIn);
  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
