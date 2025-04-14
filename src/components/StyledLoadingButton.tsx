import {
  LoadingButton,
  LoadingButtonProps as MuiLoadingButtonProps,
} from '@mui/lab';
import { useTheme } from '@mui/material';

import { FlashingDot } from './FlashingDot';

interface StyledLoadingButtonProps extends MuiLoadingButtonProps {
  loading?: boolean;
}

export const StyledLoadingButton = (props: StyledLoadingButtonProps) => {
  const { loading = false, children, ...otherProps } = props;
  const theme = useTheme();

  const dotColor =
    props.variant === 'outlined'
      ? theme.palette.common.black
      : theme.palette.common.white;

  return (
    <LoadingButton
      {...otherProps}
      loading={loading}
      loadingIndicator={<FlashingDot dotColor={dotColor} />}
    >
      {children}
    </LoadingButton>
  );
};
