import { Box, Typography, useTheme } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { Controller, useFormContext } from 'react-hook-form';

export interface RHFCheckboxProps
  extends Omit<FormControlLabelProps, 'control'> {
  name: string;
  helperText?: React.ReactNode;
}

export const RHFCheckBox = (props: RHFCheckboxProps) => {
  const { name, helperText, ...otherProps } = props;
  const { control } = useFormContext();
  const theme = useTheme();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box>
          <FormControlLabel
            {...otherProps}
            sx={{ m: 0 }}
            control={
              <Checkbox
                {...field}
                checked={field.value}
                sx={{
                  width: 20,
                  height: 20,
                  mr: 1.5,
                  color: theme.palette.primary.main,
                  '&.Mui-checked': {
                    color: theme.palette.primary.main,
                  },
                }}
              />
            }
          />
          {(!!error || helperText) && (
            <FormHelperText sx={{ mt: 0.5, ml: 4 }} error={!!error}>
              <Typography variant="subtitle1">
                {error ? error?.message : helperText}
              </Typography>
            </FormHelperText>
          )}
        </Box>
      )}
    />
  );
};
