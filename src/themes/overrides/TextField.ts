import { Components, Theme } from '@mui/material';

import { pxToRem } from '@src/themes/typography';

const TextFieldStyles = (theme: Theme): Components => ({
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-input': {
          fontWeight: 400,
          fontSize: pxToRem(14),
          lineHeight: '17.5px',
          '&::placeholder': {
            color: theme.palette.grey.A100,
            fontWeight: 400,
            fontSize: pxToRem(14),
            lineHeight: '17.5px',
          },
        },
        '& .MuiOutlinedInput-root': {
          padding: '0px 14px',
          height: '40px',
          borderRadius: 34,
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.common.white,
          '&:hover': {
            borderColor: theme.palette.primary.light,
          },
          '&.Mui-focused': {
            borderColor: theme.palette.primary.main,
          },
        },
        '&.Mui-error': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.error.main,
          },
        },
      },
    },
  },
});

export default TextFieldStyles;
