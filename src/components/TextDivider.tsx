import { Box, Typography } from '@mui/material';

export interface TextDividerProps {
  text?: string;
}

export const TextDivider = (props: TextDividerProps) => {
  const { text } = props;
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <Box
        sx={{ flexGrow: 1, borderBottom: 2, borderColor: 'primary.light' }}
      />
      <Typography variant="h6" align="center" px="14px" color="text.disabled">
        {text}
      </Typography>
      <Box
        sx={{ flexGrow: 1, borderBottom: 2, borderColor: 'primary.light' }}
      />
    </Box>
  );
};
