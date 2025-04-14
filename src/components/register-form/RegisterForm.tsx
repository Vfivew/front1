import { useCallback } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';
import { unwrapResult } from '@reduxjs/toolkit';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import { FormProvider, RHFOutlinedInput } from '@src/components';
import { RHFOutlinedPasswordInput } from '@src/components/hook-form/RHFOutlinedPasswordInput';
import { StyledLoadingButton } from '@src/components/StyledLoadingButton';
import { PATH_MAIN, RegisterFields } from '@src/constants/index';
import { useAppDispatch } from '@src/store';
import { signUp } from '@src/store/actions';

import { RegisterSchema } from './schema';

export interface IRegisterFormValues {
  [RegisterFields.FIRST_NAME]: string;
  [RegisterFields.LAST_NAME]: string;
  [RegisterFields.EMAIL]: string;
  [RegisterFields.PASSWORD]: string;
  [RegisterFields.REPEAT_PASSWORD]: string;
}

const defaultValues: IRegisterFormValues = {
  [RegisterFields.FIRST_NAME]: '',
  [RegisterFields.LAST_NAME]: '',
  [RegisterFields.EMAIL]: '',
  [RegisterFields.PASSWORD]: '',
  [RegisterFields.REPEAT_PASSWORD]: '',
};

const RegisterForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const methods = useForm<IRegisterFormValues>({
    resolver: yupResolver(RegisterSchema()),
    defaultValues: defaultValues,
    mode: 'onTouched',
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const onSubmit = useCallback(
    async (data: IRegisterFormValues) => {
      unwrapResult(
        await dispatch(
          signUp({
            email: data[RegisterFields.EMAIL],
            firstName: data[RegisterFields.FIRST_NAME],
            lastName: data[RegisterFields.LAST_NAME],
            password: data[RegisterFields.PASSWORD],
            repeatPassword: data[RegisterFields.REPEAT_PASSWORD],
          }),
        ),
      );
      toast.success(t('success.welcome'));
      router.push(PATH_MAIN.ROOT);
    },
    [dispatch, router, t],
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Stack spacing={2}>
          <RHFOutlinedInput
            name={RegisterFields.FIRST_NAME}
            placeholder={t('inputs.firstName')}
            fullWidth
          />
          <RHFOutlinedInput
            name={RegisterFields.LAST_NAME}
            placeholder={t('inputs.lastName')}
            fullWidth
          />
          <RHFOutlinedInput
            name={RegisterFields.EMAIL}
            type="email"
            placeholder={t('inputs.email')}
            fullWidth
          />
          <RHFOutlinedPasswordInput
            name={RegisterFields.PASSWORD}
            placeholder={t('inputs.password')}
          />
          <RHFOutlinedPasswordInput
            name={RegisterFields.REPEAT_PASSWORD}
            placeholder={t('inputs.confirmPassword')}
          />
        </Stack>
        <StyledLoadingButton
          fullWidth
          disabled={isSubmitting || !isValid}
          type="submit"
          variant="contained"
        >
          {t('auth.signUp')}
        </StyledLoadingButton>
      </Stack>
    </FormProvider>
  );
};

export default RegisterForm;
