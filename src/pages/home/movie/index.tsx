import { useCallback, useEffect, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Stack, Typography, Button, useTheme } from '@mui/material';
import { t } from 'i18next';
import { useRouter } from 'next/router';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { FormProvider, RHFOutlinedInput, SVGIcon } from '@src/components';
import LineLoader from '@src/components/LineLoader';
import {
  StyledImageDropZoneBox,
  StyledMovieButton,
  StyledMovieCreateBox,
  StyledPreUploadedBox,
} from '@src/components/styles/styles';
import { CreateMovieFields, PATH_MAIN } from '@src/constants';
import { useMovie } from '@src/hooks/useMovie';
import { MovieSchema } from '@src/schemas/movieSchema';
import { useAppDispatch } from '@src/store';
import { updateMovie, createMovie } from '@src/store/actions/movie';

export interface ICreateMovieValues {
  [CreateMovieFields.NAME]: string;
  [CreateMovieFields.DESCRIPTION]: string;
  [CreateMovieFields.IMAGE_URL]: string | File;
}

const defaultValues: ICreateMovieValues = {
  [CreateMovieFields.NAME]: '',
  [CreateMovieFields.DESCRIPTION]: '',
  [CreateMovieFields.IMAGE_URL]: '',
};

const MoviePage = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const methods = useForm<ICreateMovieValues>({
    // @ts-expect-error: Casting MovieSchema to 'unknown' to bypass typing issues
    resolver: yupResolver(MovieSchema() as unknown),
    defaultValues,
    mode: 'onTouched',
  });

  const {
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting, isValid },
  } = methods;

  const { movie, loading } = useMovie(
    id ? (Array.isArray(id) ? id[0] : id) : null,
  );

  useEffect(() => {
    if (movie) {
      reset({
        [CreateMovieFields.NAME]: movie.name || '',
        [CreateMovieFields.DESCRIPTION]: movie.description || '',
        [CreateMovieFields.IMAGE_URL]: movie.imageUrl || '',
      });
      setImageUrl(movie.imageUrl || null);
    }
  }, [movie, reset]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setUploadedFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  }, []);

  useEffect(() => {
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  const handleSaveMovie = useCallback(async () => {
    const formData = new FormData();
    const { name, description } = watch();

    formData.append(CreateMovieFields.NAME, name);
    formData.append(CreateMovieFields.DESCRIPTION, description);

    if (!uploadedFile && !id) {
      toast.error(t('errors.uploadFile'));
      return;
    }

    formData.append(CreateMovieFields.IMAGE_URL, uploadedFile as File);
    try {
      if (id) {
        await dispatch(updateMovie({ id: id as string, formData })).unwrap();
        toast.success(t('success.updateCard'));
      } else {
        await dispatch(createMovie({ formData })).unwrap();
        toast.success(t('success.createCard'));
      }
    } finally {
      router.push(PATH_MAIN.ROOT);
    }
  }, [dispatch, id, watch, uploadedFile, router]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 1,
  });

  return (
    <StyledMovieCreateBox>
      <Typography variant="h2" color={theme.palette.common.white}>
        {id ? t('main.editMovie') : t('main.createMovie')}
      </Typography>

      {loading && <LineLoader />}
      <Box
        sx={{
          paddingTop: 15,
          [theme.breakpoints.down('sm')]: { paddingTop: 10 },
        }}
      >
        <FormProvider
          methods={methods}
          onSubmit={handleSubmit(handleSaveMovie)}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            sx={{
              [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
                alignItems: 'center',
              },
            }}
          >
            <StyledImageDropZoneBox {...getRootProps()}>
              <input {...getInputProps()} />
              {uploadedFile || imageUrl ? (
                <img
                  src={
                    imageUrl ||
                    (uploadedFile ? URL.createObjectURL(uploadedFile) : '')
                  }
                  alt={t('uploadedImageAlt')}
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              ) : (
                <StyledPreUploadedBox>
                  <SVGIcon name="Upload" height={24} width={24} />
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.common.white }}
                  >
                    {t('inputs.upload')}
                  </Typography>
                </StyledPreUploadedBox>
              )}
            </StyledImageDropZoneBox>

            <Stack spacing={2} sx={{ flex: 1, width: '100%' }}>
              <RHFOutlinedInput
                name={CreateMovieFields.NAME}
                placeholder={t('inputs.name')}
                fullWidth
              />
              <RHFOutlinedInput
                name={CreateMovieFields.DESCRIPTION}
                placeholder={t('inputs.title')}
              />
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  justifyContent: 'flex-start',
                  paddingTop: 6,
                  [theme.breakpoints.down('sm')]: {
                    paddingTop: 3,
                    justifyContent: 'space-between',
                  },
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSaveMovie}
                  disabled={isSubmitting || !isValid}
                  sx={{ width: '180px' }}
                >
                  {t('common.save')}
                </Button>
                <StyledMovieButton
                  variant="outlined"
                  color="secondary"
                  onClick={() => router.push(PATH_MAIN.ROOT)}
                >
                  {t('common.cancel')}
                </StyledMovieButton>
              </Stack>
            </Stack>
          </Stack>
        </FormProvider>
      </Box>
    </StyledMovieCreateBox>
  );
};

export default MoviePage;
