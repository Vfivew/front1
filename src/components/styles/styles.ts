import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledMovieCreateBox = styled(Box)(({ theme }) => ({
  padding: '120px',
  minHeight: '90vh',
  width: '100%',
  [theme.breakpoints.down('sm')]: { padding: '80px 24px 24px' },
}));

export const StyledImageDropZoneBox = styled(Box)(({ theme }) => ({
  border: `2px dashed ${theme.palette.custom.gray}`,
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
  borderRadius: '4px',
  backgroundColor: theme.palette.custom.backgroundColor,
  maxWidth: '470px',
  maxHeight: '504px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    order: -1,
    maxWidth: '100%',
  },
}));

export const StyledPreUploadedBox = styled(Box)(() => ({
  height: '500px',
  minWidth: '473px',
  display: 'flex',
  alignItems: 'center',
  gap: 2.5,
  textAlign: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

export const StyledMovieButton = styled(Button)(({ theme }) => ({
  width: '180px',
  border: `1px solid ${theme.palette.common.white}`,
  color: theme.palette.common.white,
  '&:hover': {
    border: `1px solid ${theme.palette.common.white}`,
  },
}));

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
