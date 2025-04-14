import { useCallback, useMemo } from 'react';

import {
  Box,
  Grid,
  CircularProgress,
  Typography,
  useTheme,
  Pagination,
} from '@mui/material';
import { useRouter } from 'next/router';

import { PATH_MAIN } from '@src/constants';

import Header from '../../components/Header';
import NoMovieContent from '../../components/NoMovieContent';
import { useMovies } from '../../hooks/useMovies';
import { StyledMovieBox } from './styles';

const HomePage = () => {
  const theme = useTheme();
  const router = useRouter();

  const { movies, loading, error, metadata, handlePageChange } = useMovies();

  const handlePaginationChange = useCallback(
    (_event: React.ChangeEvent<unknown>, page: number) => {
      handlePageChange(page);
    },
    [handlePageChange],
  );

  const handleMovieClick = useCallback(
    (id: string) => {
      router.push({
        pathname: PATH_MAIN.MOVIE,
        query: { id },
      });
    },
    [router],
  );

  const isNoMovies = useMemo(() => movies?.length === 0, [movies]);

  return (
    <Box
      sx={{
        padding: 15,
        minHeight: '90vh',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
          padding: [10, 3, 3],
        },
      }}
    >
      <Header />
      <Grid
        container
        spacing={3}
        sx={{
          paddingTop: 12,
          [theme.breakpoints.down('sm')]: {
            paddingTop: 8,
          },
        }}
      >
        {loading && <CircularProgress />}
        {error && <Typography color="error">{error}</Typography>}
        {isNoMovies ? (
          <NoMovieContent />
        ) : (
          movies?.map((movie) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={movie.id}>
              <StyledMovieBox onClick={() => handleMovieClick(movie.id)}>
                <Box
                  sx={{
                    position: 'relative',
                    width: 'calc(100% - 8px)',
                    height: `calc(100% - 96px)`,
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={movie.imageUrl}
                    alt={movie.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '12px',
                    }}
                  />
                </Box>
                <Box sx={{ padding: [0, 0.75] }}>
                  <Typography
                    variant="body1"
                    sx={{ marginTop: 2, color: theme.palette.common.white }}
                  >
                    {movie.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ marginTop: 2, color: theme.palette.common.white }}
                  >
                    {movie.description}
                  </Typography>
                </Box>
              </StyledMovieBox>
            </Grid>
          ))
        )}
      </Grid>

      {!isNoMovies && movies && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: 15,
            [theme.breakpoints.down('sm')]: {
              padding: [5, 1.6, 1.6],
            },
          }}
        >
          <Pagination
            count={metadata.pagesAmount}
            page={metadata.page}
            onChange={handlePaginationChange}
            siblingCount={1}
            boundaryCount={1}
            showFirstButton
            showLastButton
          />
        </Box>
      )}
    </Box>
  );
};

export default HomePage;
