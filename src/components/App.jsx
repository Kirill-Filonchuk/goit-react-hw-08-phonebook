import { lazy } from 'react';
// import { useEffect, lazy } from 'react'; -2
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
// import Home from '../pages/Home';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
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
