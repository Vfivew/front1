import { Box, Button, Typography, useTheme } from '@mui/material';
import { t } from 'i18next';
import { useRouter } from 'next/router';

import { PATH_MAIN } from '@src/constants';

const NoMovieContent = () => {
  const router = useRouter();
  const theme = useTheme();

  const handleAdd = () => {
    router.push(PATH_MAIN.MOVIE);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        gap: '40px',
      }}
    >
      <Typography variant="h2" sx={{ color: theme.palette.common.white }}>
        {t('common.noMovie')}
      </Typography>
      <Button onClick={handleAdd} variant="contained" type="button">
        <Typography
          variant="body1"
          sx={{ color: theme.palette.common.white, fontWeight: 700 }}
        >
          {t('common.addNewMovie')}
        </Typography>
      </Button>
    </Box>
  );
};

export default NoMovieContent;
