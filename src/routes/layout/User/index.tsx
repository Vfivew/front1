import { Outlet } from 'react-router-dom';

import { MainLayout } from '@src/components';

import AuthGuard from './AuthGuard';

const ProfileLayoutGuard = () => (
  <AuthGuard>
    <MainLayout>
      <Outlet />
    </MainLayout>
  </AuthGuard>
);

export default ProfileLayoutGuard;
