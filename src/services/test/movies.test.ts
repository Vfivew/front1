import MockAdapter from 'axios-mock-adapter';

import { GetMoviesResponseBodyDto } from '@src/models';
import { api } from '@src/utils';

import { getMoviesService } from '../movies';

const mock = new MockAdapter(api);

describe('getMoviesService', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should fetch movies successfully', async () => {
    const mockResponse: GetMoviesResponseBodyDto = {
      movies: [
        {
          id: '1',
          name: 'Test Movie',
          description: 'Test description',
          imageUrl: 'http://example.com/movie.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      metadata: {
        itemsAmount: 1,
        page: 1,
        take: 10,
        pagesAmount: 1,
        hasPrev: false,
        hasNext: false,
      },
    };

    mock
      .onGet('movies', { params: { page: 1, take: 10 } })
      .reply(200, mockResponse);

    const movies = await getMoviesService(1, 10);
    const transformedMovies = movies.movies.map((movie) => ({
      ...movie,
      createdAt: new Date(movie.createdAt),
      updatedAt: new Date(movie.updatedAt),
    }));

    expect(transformedMovies).toEqual([
      {
        ...mockResponse.movies[0],
        createdAt: new Date(mockResponse.movies[0].createdAt),
        updatedAt: new Date(mockResponse.movies[0].updatedAt),
      },
    ]);
  });
});
