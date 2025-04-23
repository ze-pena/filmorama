import { configureStore } from '@reduxjs/toolkit';
import favoritesSlice from './reducers/favorites';
import searchSlice from './reducers/search';

const store = configureStore({
  reducer: {
    favorites: favoritesSlice,
    search: searchSlice,
  },
});

export default store;
