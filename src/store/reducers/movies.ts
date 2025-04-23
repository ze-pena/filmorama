import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tmdbServices from '@services/TMDB';

import { Genre, GenreList } from '@interfaces/Genre';
import { Movie, MovieSort, MovieList } from '@interfaces/Movie';

export const getMovieGenre = createAsyncThunk('movies/genre', () =>
  tmdbServices.genre.getMovieGenre<GenreList>()
);

export const getMovieDiscover = createAsyncThunk(
  'movies/discover',
  ({ sort, genre }: { sort?: MovieSort[]; genre?: number }) =>
    tmdbServices.discover.getMovieDiscover<MovieList>(sort, genre)
);

export const getMovieSearch = createAsyncThunk(
  'movies/search',
  ({
    query,
    page,
    language,
  }: {
    query: string;
    page?: number;
    language?: string;
  }) => tmdbServices.search.getMovieSearch<MovieList>(query, page, language)
);

type StoreState = {
  genres: Genre[];
  results: Movie[];
  page: number;
  totalPages: number;
  isLoading: boolean;
};

const initialState: StoreState = {
  genres: [],
  results: [],
  page: 0,
  totalPages: 0,
  isLoading: false,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getMovieGenre.rejected, () => {})
      .addCase(getMovieGenre.pending, state => {
        state.isLoading = true;
      })
      .addCase(getMovieGenre.fulfilled, (state, { payload }) => {
        Object.assign(state, {
          ...state,
          genres: payload.genres,
          isLoading: false,
        });
      })
      .addCase(getMovieDiscover.rejected, () => {})
      .addCase(getMovieDiscover.pending, state => {
        state.isLoading = true;
      })
      .addCase(getMovieDiscover.fulfilled, (state, { payload }) => {
        Object.assign(state, {
          ...state,
          results: payload.results,
          page: payload.page,
          totalPages: payload.total_pages,
          isLoading: false,
        });
      })
      .addCase(getMovieSearch.rejected, () => {})
      .addCase(getMovieSearch.pending, state => {
        state.isLoading = true;
      })
      .addCase(getMovieSearch.fulfilled, (state, { payload }) => {
        Object.assign(state, {
          ...state,
          results: payload.results,
          page: payload.page,
          totalPages: payload.total_pages,
          isLoading: false,
        });
      });
  },
});

export default movieSlice.reducer;
