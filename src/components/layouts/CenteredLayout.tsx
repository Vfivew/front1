import { Stack } from '@mui/material';

export interface CenteredLayoutProps {
  children: React.ReactNode;
}

export const CenteredLayout = (props: CenteredLayoutProps) => {
  const { children } = props;
  return (
    <Stack
      sx={{
        maxWidth: 360,
        flex: 1,
        mt: { xs: 14, sm: 5 },
        mb: 5,
      }}
    >
      {children}
    </Stack>
  );
};
