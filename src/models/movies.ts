export interface Movies {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Metadata {
  itemsAmount: number;
  page: number;
  take: number;
  pagesAmount: number;
  hasPrev: boolean;
  hasNext: boolean;
}

export interface GetMoviesResponseBodyDto {
  metadata: Metadata;
  movies: Movies[];
}
