import { Grid } from '@mui/material';

import greenWave from '@src/assets/greenWave.png';
import whiteWave from '@src/assets/whiteWave.png';

export interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  return (
    <>
      <Grid
        container
        sx={{
          minHeight: '100vh',
          width: '100%',
          backgroundImage: `url(${whiteWave}), url(${greenWave})`,
          backgroundSize: '100% 10%, 100% 10%',
          backgroundPosition: 'bottom, bottom',
          backgroundRepeat: 'no-repeat, no-repeat',
        }}
        flexDirection="column"
      >
        <Grid
          container
          item
          sx={{ flex: 1, position: 'relative', minHeight: '90vh' }}
        >
          {children}
        </Grid>
      </Grid>
    </>
  );
};
