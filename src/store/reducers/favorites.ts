import { createSlice } from '@reduxjs/toolkit';
import { Movie } from '@interfaces/Movie';
import { Action } from '@interfaces/Redux';

const initialState: Movie[] = [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, { payload }: Action<Movie>): void => {
      const index = state.findIndex(item => item.id === payload.id);

      if (index > -1) {
        state.splice(index, 1);
      } else {
        state.push(payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
