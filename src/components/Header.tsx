import { useCallback } from 'react';

import { Box, Button, Typography, useTheme } from '@mui/material';
import { t } from 'i18next';
import { useRouter } from 'next/router';

import { SVGIcon } from '@src/components';
import { PATH_MAIN, ROOT_AUTH } from '@src/constants';
import { useAppDispatch } from '@src/store';
import { logout } from '@src/store/reducers/auth/actions';

const Header = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const theme = useTheme();

  const handleLogout = useCallback(() => {
    dispatch(logout());
    router.push(ROOT_AUTH);
  }, []);

  const handleAdd = useCallback(() => {
    router.push(PATH_MAIN.MOVIE);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2.5,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: theme.palette.common.white,
            [theme.breakpoints.down('sm')]: {
              ...theme.typography.h3,
            },
          }}
        >
          {t('profile.myMovies')}
        </Typography>
        <Button onClick={handleAdd} variant="outlined" type="button">
          <SVGIcon name="Add" height={24} width={24} />
        </Button>
      </Box>

      <Button
        variant="outlined"
        onClick={handleLogout}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2.5,
          color: theme.palette.common.white,
        }}
        type="button"
      >
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.common.white,
            [theme.breakpoints.down('sm')]: {
              display: 'none',
            },
          }}
        >
          {t('profile.logout')}
        </Typography>
        <SVGIcon name="Logout" height={24} width={24} />
      </Button>
    </Box>
  );
};

export default Header;
