import { configureStore } from '@reduxjs/toolkit';
import favoritesSlice from './reducers/favorites';

const store = configureStore({
  reducer: {
    favorites: favoritesSlice,
  },
});

export default store;
