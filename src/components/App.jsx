import { lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
// import { useAuth } from './hooks';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  // const dispatch = useDispatch;
  // const {}
  // useEffect(() => {}, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} /> {/* R_R*/}
        <Route path="/login" element={<LoginPage />} /> {/* R_R*/}
        <Route path="/contacts" element={<ContactsPage />} /> {/* P_R*/}
      </Route>
    </Routes>
  );
};
