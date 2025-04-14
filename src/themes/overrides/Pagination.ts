import { Theme } from '@mui/material/styles';

import { pxToRem } from '../typography';

export default function Pagination(theme: Theme) {
  return {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          height: '32px',
          minWidth: '32px',
          borderRadius: '8px',
          transition: 'all 0.3s ease-in-out',
          backgroundColor: theme.palette.primary.dark,
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
          },
          '&:active': {
            border: `1px solid ${theme.palette.primary.main}`,
          },
        },
        page: {
          fontSize: pxToRem(14),
          lineHeight: pxToRem(24),
          color: theme.palette.common.white,
          backgroundColor: theme.palette.primary.dark,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.main,
          },
          '&.Mui-selected': {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.main,
            fontWeight: '700',
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
            },
          },
        },
        previousNext: {
          border: `1px solid ${theme.palette.grey[300]}`,
          backgroundColor: theme.palette.primary.dark,
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
          },
        },
        firstLast: {
          border: `1px solid ${theme.palette.grey[300]}`,
          backgroundColor: theme.palette.primary.dark,
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
          },
        },
      },
    },
  };
}
