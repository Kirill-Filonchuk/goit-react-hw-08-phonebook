// import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
// import { authSelectors } from '../redux/auth';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  // const isLoggedIn = useSelector('authSelectors.getIsLoggedIn');
  // const isLoggedIn = true;
  return (
    <header style={styles.header}>
      <Navigation />
      <UserMenu />
      <AuthNav />
      {/* <AuthNav /> меню из "Регистрации и Войти" */}
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
}
