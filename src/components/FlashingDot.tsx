import { styled } from '@mui/material/styles';

export const FlashingDot = styled('span')<{ dotColor: string }>(
  ({ dotColor, theme }) => ({
    position: 'relative',
    width: '10px',
    height: '10px',
    borderRadius: '5px',
    backgroundColor: dotColor,
    color: dotColor,
    animation: 'dot-flashing 1s infinite linear alternate',
    animationDelay: '0.5s',
    '&::before, &::after': {
      content: '""',
      display: 'inline-block',
      position: 'absolute',
      top: 0,
    },
    '&::before': {
      left: '-15px',
      width: '10px',
      height: '10px',
      borderRadius: '5px',
      backgroundColor: dotColor,
      color: dotColor,
      animation: 'dot-flashing 1s infinite alternate',
      animationDelay: '0s',
    },
    '&::after': {
      left: '15px',
      width: '10px',
      height: '10px',
      borderRadius: '5px',
      backgroundColor: dotColor,
      color: dotColor,
      animation: 'dot-flashing 1s infinite alternate',
      animationDelay: '1s',
    },
    '@keyframes dot-flashing': {
      '0%': {
        backgroundColor: dotColor,
      },
      '50%, 100%': {
        backgroundColor:
          dotColor === theme.palette.common.white
            ? theme.palette.common.whiteOpacity
            : theme.palette.common.blackOpacity,
      },
    },
  }),
);
