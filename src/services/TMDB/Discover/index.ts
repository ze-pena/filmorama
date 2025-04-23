import { TMDB_BASE_URL, TMBD_API_KEY } from '@configs/api';
import { fetchRequest } from '@configs/requests';
import { MovieSort } from '@interfaces/Movie';

export default {
  async getMovieDiscover<T>(
    sort: MovieSort[] = ['popularity.desc'],
    page: number = 1,
    genre?: number
  ): Promise<T> {
    const query = [];

    if (sort) query.push(`sort_by=${sort.join(',')}`);

    if (page) query.push(`page=${page}`);

    if (genre) query.push(`with_genres=${genre}`);

    const response = await fetchRequest<T>(
      `${TMDB_BASE_URL}/discover/movie${query.length ? `?${query.join('&')}` : ''}`,
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
