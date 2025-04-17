import { TMDB_BASE_URL, TMBD_API_KEY } from '@configs/api';
import { fetchRequest } from '@configs/requests';

export default {
  async getMovieSearch<T>(
    query: string,
    page: number = 1,
    language: string = 'en-US'
  ): Promise<T> {
    const response = await fetchRequest<T>(
      `${TMDB_BASE_URL}/search/movie?query=${query}&page=${page}&language=${language}`,
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
