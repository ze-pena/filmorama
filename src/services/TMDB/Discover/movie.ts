import { TMDB_BASE_URL, TMBD_API_KEY } from '@configs/api';
import { fetchRequest } from '@configs/requests';

export default {
  async getMovie<T>(): Promise<T> {
    const response = await fetchRequest<T>(`${TMDB_BASE_URL}/discover/movie`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TMBD_API_KEY}`,
      },
    });
    return response;
  },
};
