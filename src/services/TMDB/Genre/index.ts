import { TMDB_BASE_URL, TMBD_API_KEY } from '@configs/api';
import { fetchRequest } from '@configs/requests';

export default {
  async getMovieGenre<T>(): Promise<T> {
    const response = await fetchRequest<T>(
      `${TMDB_BASE_URL}/genre/movie/list`,
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
