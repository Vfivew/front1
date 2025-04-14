import { ReactElement, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Loader from '@src/components/Loader';
import { PATH_AUTH } from '@src/constants/index';
import { user, auth } from '@src/store/selectors';

export type GuardProps = {
  children: ReactElement | null;
};

const AuthGuard = ({ children }: GuardProps) => {
  const { currentUser } = useSelector(user);
  const { localToken, sessionToken } = useSelector(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!(sessionToken || localToken)) {
      navigate(PATH_AUTH.LOGIN);
    }
  }, [sessionToken, localToken, navigate]);

  if (!currentUser) {
    return <Loader />;
  }

  return children;
};

export default AuthGuard;
