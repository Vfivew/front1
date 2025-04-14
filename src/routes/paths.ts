function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

export const ROOT_AUTH = '/auth';

export const PATH_AUTH = {
  ROOT: ROOT_AUTH,
  LOGIN: path(ROOT_AUTH, '/login'),
  REGISTER: path(ROOT_AUTH, '/register'),
};

export const PATH_MAIN = {
  ROOT: '/home',
  MOVIE: '/home/movie',
  MOVIE_ID: '/home/movie/:id',
};
