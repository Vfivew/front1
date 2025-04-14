import { Components } from '@mui/material';

const Link = (): Components => ({
  MuiLink: {
    defaultProps: {
      underline: 'none',
    },
    styleOverrides: {
      root: {
        fontWeight: 500,
        textDecorationColor: 'inherit',
        color: 'inherit',
      },
    },
  },
});

export default Link;
