interface Genre {
  id: number;
  name: string;
}

interface Movie {
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
}

interface GenreList {
  genres: Genre[];
}

interface MovieList {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export type { Genre, GenreList, Movie, MovieList };
