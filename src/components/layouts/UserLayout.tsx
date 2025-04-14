import { Box } from '@mui/material';

interface ProfileLayoutProps {
  children: React.ReactNode;
  alignItems?: boolean;
}

export const UserLayout = ({ children }: ProfileLayoutProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        mb: 5,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
