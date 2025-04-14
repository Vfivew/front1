import { useState } from 'react';

import { IconButton, InputAdornment, useTheme } from '@mui/material';

import { RHFOutlinedInput, RHFOutlinedInputProps } from './RHFOutlinedInput';
import { SVGIcon } from '../svg-icon';

export type RHFOutlinedPasswordInputProps = Omit<
  RHFOutlinedInputProps,
  'type' | 'endAdornment'
>;

export const RHFOutlinedPasswordInput = (
  props: RHFOutlinedPasswordInputProps,
) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <RHFOutlinedInput
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end">
          <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
            <SVGIcon
              name={showPassword ? 'EyeClosed' : 'Eye'}
              width={24}
              height={24}
              color={theme.palette.text.secondary}
            />
          </IconButton>
        </InputAdornment>
      }
      {...props}
    />
  );
};
