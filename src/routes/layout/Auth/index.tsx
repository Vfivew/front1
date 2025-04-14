import { Outlet } from 'react-router-dom';

import { MainLayout } from '@src/components';

const AuthLayoutGuard = () => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);

export default AuthLayoutGuard;
