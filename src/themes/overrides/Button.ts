import { Theme } from '@mui/material';

import { pxToRem } from '@src/themes/typography';

const Button = (theme: Theme) => ({
  MuiButton: {
    defaultProps: {
      disableElevation: true, // Disables the shadow on all Buttons by default
    },
    styleOverrides: {
      root: {
        borderRadius: 8,
        padding: '16px 12px',
        fontSize: pxToRem(16),
        fontWeight: 700,
        textTransform: 'none',
      },
      contained: {
        color: theme.palette.common.white,
        '&.Mui-disabled': {
          backgroundColor: theme.palette.primary.secondary,
          color: theme.palette.text.black,
        },
      },
      outlined: {
        border: 'none',
        color: theme.palette.primary.secondary,
        '&:hover': {
          backgroundColor: theme.palette.primary.secondary,
          color: theme.palette.common.white,
          borderColor: theme.palette.primary.secondary,
          border: 'none',
        },
        '&.Mui-disabled': {
          borderColor: theme.palette.primary.secondary,
          color: theme.palette.text.disabled,
          border: 'none',
        },
      },
    },
  },
});

export default Button;
