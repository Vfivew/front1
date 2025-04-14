import { useCallback } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Stack } from '@mui/material';
import { unwrapResult } from '@reduxjs/toolkit';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import { FormProvider, RHFCheckBox, RHFOutlinedInput } from '@src/components';
import { RHFOutlinedPasswordInput } from '@src/components/hook-form/RHFOutlinedPasswordInput';
import { LoginFields, PATH_MAIN } from '@src/constants/index';
import { useAppDispatch } from '@src/store';
import { signIn } from '@src/store/actions';

import { LoginSchema } from './schema';

export interface ILoginFormValues {
  [LoginFields.EMAIL]: string;
  [LoginFields.PASSWORD]: string;
  [LoginFields.REMEMBER_ME]?: boolean;
}

const defaultValues: ILoginFormValues = {
  [LoginFields.EMAIL]: '',
  [LoginFields.PASSWORD]: '',
  [LoginFields.REMEMBER_ME]: false,
};

const LoginForm = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const methods = useForm<ILoginFormValues>({
    resolver: yupResolver(LoginSchema()),
    defaultValues,
    mode: 'onTouched',
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const onSubmit = useCallback(
    (data: ILoginFormValues) =>
      dispatch(signIn({ ...data }))
        .then(unwrapResult)
        .then(() => {
          router.push(PATH_MAIN.ROOT);
          toast.success(t('success.welcome'));
        }),
    [dispatch, router, t],
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={3}>
        <Stack gap={2}>
          <RHFOutlinedInput
            name={LoginFields.EMAIL}
            type="email"
            placeholder={t('inputs.email')}
            fullWidth
          />
          <RHFOutlinedPasswordInput
            name={LoginFields.PASSWORD}
            placeholder={t('inputs.password')}
          />
          <RHFCheckBox
            name={LoginFields.REMEMBER_ME}
            label={t('inputs.rememberMe')}
          />
        </Stack>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}></Box>
        <Button
          fullWidth
          disabled={isSubmitting || !isValid}
          type="submit"
          variant="contained"
        >
          {t('auth.login')}
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default LoginForm;
