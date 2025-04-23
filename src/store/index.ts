import { configureStore } from '@reduxjs/toolkit';
import favoritesSlice from './reducers/favorites';
import searchSlice from './reducers/search';
import moviesSlice from './reducers/movies';

const store = configureStore({
  reducer: {
    favorites: favoritesSlice,
    search: searchSlice,
    movies: moviesSlice,
  },
});

export default store;
