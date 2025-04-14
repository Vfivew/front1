import { Movies } from '@src/models';
import { getMovies } from '@src/store/actions/movies';

import reducer, { IMoviesState } from './';

describe('moviesSlice', () => {
  const initialState: IMoviesState = {
    error: null,
    loading: false,
    movies: [],
    metadata: {
      itemsAmount: 0,
      page: 1,
      take: 10,
      pagesAmount: 0,
      hasPrev: false,
      hasNext: false,
    },
  };

  describe('getMovies async actions', () => {
    it('should handle getMovies.pending', () => {
      const nextState = reducer(
        initialState,
        getMovies.pending('', { page: 1, take: 10 }),
      );
      expect(nextState.loading).toBe(true);
      expect(nextState.error).toBeNull();
    });

    it('should handle getMovies.fulfilled', () => {
      const moviesData: Movies[] = [
        {
          id: '124df-e214-434sdd-214421',
          name: 'Movie Title 1',
          description: 'Description 1',
          imageUrl: 'http://example.com/movie1.jpg',
          createdAt: new Date('2025-03-11'),
          updatedAt: new Date('2025-03-11'),
        },
        {
          id: '124df-e214-434sdd-214422',
          name: 'Movie Title 2',
          description: 'Description 2',
          imageUrl: 'http://example.com/movie2.jpg',
          createdAt: new Date('2025-03-12'),
          updatedAt: new Date('2025-03-12'),
        },
      ];

      const metadata = {
        itemsAmount: 2,
        page: 1,
        take: 10,
        pagesAmount: 1,
        hasPrev: false,
        hasNext: false,
      };

      const action = getMovies.fulfilled({ movies: moviesData, metadata }, '', {
        page: 1,
        take: 10,
      });
      const nextState = reducer(initialState, action);

      expect(nextState.loading).toBe(false);
      expect(nextState.movies).toEqual(moviesData);
      expect(nextState.metadata).toEqual(metadata);
    });
  });
});
