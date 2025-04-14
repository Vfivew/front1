import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { AppDispatch } from '@src/store';
import { getMovies } from '@src/store/actions/movies';
import { movies as moviesSelector } from '@src/store/selectors';

export const useMovies = () => {
  const [page, setPage] = useState(1);
  const [take] = useState(8);

  const { movies, metadata, loading, error } = useSelector(moviesSelector);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getMovies({ page, take }));
  }, [dispatch, page, take]);

  const nextPage = () => {
    if (metadata?.hasNext) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (metadata?.hasPrev) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return {
    movies,
    metadata,
    loading,
    error,
    page,
    hasNext: metadata?.hasNext,
    hasPrev: metadata?.hasPrev,
    nextPage,
    prevPage,
    handlePageChange,
  };
};
