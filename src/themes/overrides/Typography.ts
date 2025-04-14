import { Components } from '@mui/material';

const Typography = (): Components => ({
  MuiTypography: {
    styleOverrides: {
      gutterBottom: {
        marginBottom: 12,
      },
    },
  },
});

export default Typography;
