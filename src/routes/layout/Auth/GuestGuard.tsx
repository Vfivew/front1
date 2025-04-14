import { ReactElement, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';

import { useAppDispatch } from '@src/store';
import { getUser } from '@src/store/actions';
import { clearUser } from '@src/store/reducers/user';
import { auth } from '@src/store/selectors';

export type GuardProps = {
  children: ReactElement | null;
};

const GuestGuard = () => {
  const dispatch = useAppDispatch();
  const { sessionToken, localToken } = useSelector(auth);

  useEffect(() => {
    if (sessionToken || localToken) {
      dispatch(getUser());
    } else {
      dispatch(clearUser());
    }
  }, [sessionToken, localToken, dispatch]);

  return <Outlet />;
};

export default GuestGuard;
