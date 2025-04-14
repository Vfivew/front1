import { Box, Container } from '@mui/material';

import ScrollTop from '@src/components/ScrollTop';

export interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = (props: AuthLayoutProps) => {
  const { children } = props;
  return (
    <ScrollTop>
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundImage: `url('/assets/whiteWave.png'), url('/assets/greenWave.png')`,
          backgroundSize: '100% 10%, 100% 10%',
          backgroundPosition: 'bottom, bottom',
          backgroundRepeat: 'no-repeat, no-repeat',
        }}
      >
        <Container
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {children}
        </Container>
      </Box>
    </ScrollTop>
  );
};
