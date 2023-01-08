import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Logo } from './Logo/Logo';
import styled from 'styled-components';

const HeaderComp = styled.div`
  min-width: 430;
  max-width: 960;
  margin: '0 auto';
  padding: '0 16px';
`;

export const Layout = () => {
  return (
    <HeaderComp>
      <Logo />
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </HeaderComp>
  );
};
