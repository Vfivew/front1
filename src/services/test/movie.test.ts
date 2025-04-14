import MockAdapter from 'axios-mock-adapter';

import { Movies } from '@src/models';
import { api } from '@src/utils';

import {
  createMovieService,
  getMovieService,
  updateMovieService,
} from '../movie';

const mock = new MockAdapter(api);

vi.mock('@src/store', () => ({
  store: {
    dispatch: vi.fn(),
  },
}));

describe('Movies Service', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should fetch a movie successfully', async () => {
    const movieId = '12345';
    const mockMovie: Movies = {
      id: movieId,
      name: 'Test Movie',
      description: 'Test description',
      imageUrl: 'http://example.com/movie.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    mock.onGet(`movies/${movieId}`).reply(200, {
      ...mockMovie,
      createdAt: mockMovie.createdAt.toISOString(),
      updatedAt: mockMovie.updatedAt.toISOString(),
    });

    const movie = await getMovieService(movieId);
    expect({
      ...movie,
      createdAt: new Date(movie.createdAt),
      updatedAt: new Date(movie.updatedAt),
    }).toEqual(mockMovie);
  });

  it('should update a movie successfully', async () => {
    const movieId = '12345';
    const formData = new FormData();
    formData.append('name', 'Updated Movie');

    const mockMovie: Movies = {
      id: movieId,
      name: 'Updated Movie',
      description: 'Updated description',
      imageUrl: 'http://example.com/movie.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    mock.onPatch(`movies/${movieId}`).reply(200, {
      ...mockMovie,
      createdAt: mockMovie.createdAt.toISOString(),
      updatedAt: mockMovie.updatedAt.toISOString(),
    });

    const updatedMovie = await updateMovieService(movieId, formData);
    expect({
      ...updatedMovie,
      createdAt: new Date(updatedMovie.createdAt),
      updatedAt: new Date(updatedMovie.updatedAt),
    }).toEqual(mockMovie);
  });

  it('should create a movie successfully', async () => {
    const formData = new FormData();
    formData.append('name', 'New Movie');

    const mockMovie: Movies = {
      id: '67890',
      name: 'New Movie',
      description: 'New description',
      imageUrl: 'http://example.com/movie.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    mock.onPost('movies').reply(200, {
      ...mockMovie,
      createdAt: mockMovie.createdAt.toISOString(),
      updatedAt: mockMovie.updatedAt.toISOString(),
    });

    const createdMovie = await createMovieService(formData);
    expect({
      ...createdMovie,
      createdAt: new Date(createdMovie.createdAt),
      updatedAt: new Date(createdMovie.updatedAt),
    }).toEqual(mockMovie);
  });
});
