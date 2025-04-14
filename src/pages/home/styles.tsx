import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledMovieBox = styled(Box)(({ theme }) => ({
  height: '504px',
  maxWidth: '400px',
  padding: theme.spacing(1, 0, 0.5, 1.25),
  backgroundColor: theme.palette.primary.dark,
  borderRadius: '12px',
  boxShadow: theme.shadows[2],
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    height: '334px',
    maxWidth: '100%',
    aspectRatio: '4 / 3',
  },
}));

export const StyledImageBox = styled(Box)(() => ({
  position: 'relative',
  width: 'calc(100% - 8px)',
  height: `calc(100% - 96px)`,
  overflow: 'hidden',
}));

export const StyledNameTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: theme.palette.common.white,
}));
