import { useCallback } from 'react';

import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { MainLayout } from '@src/components';
import { PATH_MAIN } from '@src/constants/index';

const Error404: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const hasPreviousPage = window.history.length > 2;
  const theme = useTheme();

  const handleErrorButtonClick = useCallback(() => {
    if (hasPreviousPage) {
      router.back();
    } else {
      router.push(PATH_MAIN.MOVIE);
    }
  }, []);

  return (
    <MainLayout>
      <Stack
        sx={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: 5,
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 2,
          paddingRight: 2,
        }}
      >
        <Box>
          <Typography variant="h1" color={theme.palette.common.white}>
            {t('error404.header')}
          </Typography>
          <Typography variant="h4" color={theme.palette.common.white}>
            {t('error404.subheader')}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" color={theme.palette.common.white}>
            {t('error404.description')}
          </Typography>
          <Typography variant="body2" color={theme.palette.common.white}>
            {t(
              hasPreviousPage
                ? 'error404.pleaseGoBack'
                : 'error404.pleaseGoToHomePage',
            )}
          </Typography>
        </Box>
        <Button
          sx={{
            width: '220px',
          }}
          onClick={handleErrorButtonClick}
          variant="contained"
        >
          {t(hasPreviousPage ? 'error404.goBack' : 'error404.homePage')}
        </Button>
      </Stack>
    </MainLayout>
  );
};

export default Error404;
