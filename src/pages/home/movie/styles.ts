import { Box, Button } from '@mui/material';
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
