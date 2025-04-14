import { Movies } from '@src/models';
import { createMovie, getMovie, updateMovie } from '@src/store/actions/movie';

import reducer, { IMoviesState } from './';

describe('moviesSlice', () => {
  const initialState: IMoviesState = {
    error: null,
    loading: false,
    movie: null,
  };

  describe('getMovie async actions', () => {
    it('should handle getMovie.pending', () => {
      const nextState = reducer(
        initialState,
        getMovie.pending('', { id: '124df-e214-434sdd-214421' }),
      );
      expect(nextState.loading).toBe(true);
      expect(nextState.error).toBeNull();
    });

    it('should handle getMovie.fulfilled', () => {
      const movieData: Movies = {
        id: '124df-e214-434sdd-214421',
        name: 'Movie Title',
        description: 'Movie description',
        imageUrl: 'http://example.com/movie.jpg',
        createdAt: new Date('2025-03-11'),
        updatedAt: new Date('2025-03-11'),
      };

      const nextState = reducer(
        initialState,
        getMovie.fulfilled(movieData, '', { id: '124df-e214-434sdd-214421' }),
      );
      expect(nextState.loading).toBe(false);
      expect(nextState.movie).toEqual(movieData);
    });
  });

  describe('updateMovie async actions', () => {
    it('should handle updateMovie.pending', () => {
      const nextState = reducer(
        initialState,
        updateMovie.pending('', {
          id: '124df-e214-434sdd-214421',
          formData: new FormData(),
        }),
      );
      expect(nextState.loading).toBe(true);
      expect(nextState.error).toBeNull();
    });

    it('should handle updateMovie.fulfilled', () => {
      const movieData: Movies = {
        id: '124df-e214-434sdd-214421',
        name: 'Updated Movie Title',
        description: 'Updated Movie description',
        imageUrl: 'http://example.com/updated_movie.jpg',
        createdAt: new Date('2025-03-11'),
        updatedAt: new Date('2025-03-11'),
      };

      const formData = new FormData();
      formData.append('name', 'Updated Movie Title');
      formData.append('description', 'Updated Movie description');

      const nextState = reducer(
        initialState,
        updateMovie.fulfilled(movieData, '', {
          id: '124df-e214-434sdd-214421',
          formData,
        }),
      );
      expect(nextState.loading).toBe(false);
      expect(nextState.movie).toEqual(movieData);
    });
  });

  describe('createMovie async actions', () => {
    it('should handle createMovie.pending', () => {
      const nextState = reducer(
        initialState,
        createMovie.pending('', { formData: new FormData() }),
      );
      expect(nextState.loading).toBe(true);
      expect(nextState.error).toBeNull();
    });

    it('should handle createMovie.fulfilled', () => {
      const movieData: Movies = {
        id: '124df-e214-434sdd-214421',
        name: 'New Movie Title',
        description: 'New Movie description',
        imageUrl: 'http://example.com/new_movie.jpg',
        createdAt: new Date('2025-03-11'),
        updatedAt: new Date('2025-03-11'),
      };

      const formData = new FormData();
      formData.append('name', 'New Movie Title');
      formData.append('description', 'New Movie description');

      const nextState = reducer(
        initialState,
        createMovie.fulfilled(movieData, '', { formData }),
      );
      expect(nextState.loading).toBe(false);
      expect(nextState.movie).toEqual(movieData);
    });
  });
});
