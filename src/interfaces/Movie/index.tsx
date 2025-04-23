type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type MovieSort =
  | 'popularity.desc'
  | 'popularity.asc'
  | 'original_title.desc'
  | 'original_title.asc'
  | 'title.desc'
  | 'title.asc'
  | 'vote_average.desc'
  | 'vote_average.asc'
  | 'primary_release_date.desc'
  | 'primary_release_date.asc';

interface MovieList {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export type { Movie, MovieSort, MovieList };
