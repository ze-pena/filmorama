import { TMDB_BASE_URL, TMBD_API_KEY } from '@configs/api';
import { fetchRequest } from '@configs/requests';

type Sort =
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

export default {
  async getMovieDiscover<T>(
    genre: number,
    sort: Sort[] = ['popularity.desc']
  ): Promise<T> {
    const response = await fetchRequest<T>(
      `${TMDB_BASE_URL}/discover/movie?with_genres=${genre}&sort_by=${sort.join(',')}`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${TMBD_API_KEY}`,
        },
      }
    );

    return response;
  },
};
