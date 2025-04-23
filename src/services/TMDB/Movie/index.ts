import { TMDB_BASE_URL, TMBD_API_KEY } from '@configs/api';
import { fetchRequest } from '@configs/requests';

export default {
  async getPopularMovies<T>(
    page: number = 1,
    language: string = 'en-US'
  ): Promise<T> {
    const url = `${TMDB_BASE_URL}/movie/popular?page=${page}&language=${language}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TMBD_API_KEY}`,
      },
    };

    const response = await fetchRequest<T>(url, options);
    return response;
  },
};
