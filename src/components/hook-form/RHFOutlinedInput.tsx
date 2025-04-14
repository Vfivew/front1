import {
  Box,
  FormHelperText,
  OutlinedInput,
  OutlinedInputProps,
  Typography,
} from '@mui/material';
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from 'react-hook-form';

export interface RHFOutlinedInputProps extends OutlinedInputProps {
  name: string;
}

export const RHFOutlinedInput = (props: RHFOutlinedInputProps) => {
  const { name, inputProps, onChange, ...otherProps } = props;
  const { control } = useFormContext();

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: ControllerRenderProps<FieldValues, string>,
  ) => {
    let newValue = event.target.value;
    if (inputProps?.type === 'phone') {
      newValue = newValue.replace(/[^0-9]/g, '');
      if (newValue.split('.').length > 2) {
        newValue = newValue.slice(0, -1);
      }
    }

    if (inputProps?.type === 'number') {
      newValue = newValue.replace(/[^0-9]/g, '');
      if (newValue.startsWith('0') && newValue.length > 1) {
        newValue = newValue.replace(/^0+/, '');
      }
      if (newValue.split('.').length > 2) {
        newValue = newValue.slice(0, -1);
      }
    }
    if (onChange) {
      onChange(event);
    }
    field.onChange(newValue);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const value =
          typeof field.value === 'number' && field.value === 0
            ? ''
            : field.value;
        return (
          <Box>
            <OutlinedInput
              {...field}
              inputProps={{ sx: { height: 25 } }}
              sx={{
                borderRadius: 2,
                color: 'text.white',
                backgroundColor: 'text.primary',
              }}
              value={value}
              onChange={(event) => onInputChange(event, field)}
              fullWidth
              error={!!error}
              label={null}
              {...otherProps}
            />
            {!!error && (
              <FormHelperText sx={{ mt: 0.5, ml: 2 }} error>
                <Typography variant="subtitle1">{error.message}</Typography>
              </FormHelperText>
            )}
          </Box>
        );
      }}
    />
  );
};
