import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { AppDispatch } from '@src/store';
import { getMovie } from '@src/store/actions/movie';
import { movie as movieSelector } from '@src/store/selectors';

export const useMovie = (id: string | null) => {
  const { movie, loading, error } = useSelector(movieSelector);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (id) {
      dispatch(getMovie({ id }));
    }
  }, [dispatch, id]);

  return {
    movie,
    loading,
    error,
  };
};
