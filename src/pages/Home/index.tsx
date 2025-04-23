import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearchName } from '@store/reducers/search';

import tmdbServices from '@services/TMDB';

import SearchInput from '@components/inputs/SearchInput';
import MovieCard from '@components/cards/MovieCard';
import SpinnerLoading from '@components/loaders/SpinnerLoading';

import { MovieList } from '@interfaces/Movie';
import { StoreState } from '@interfaces/Redux';

import './styles.scss';

function Home() {
  const [movieList, setMovieList] = useState<MovieList | null>(null);
  const { name } = useSelector((state: StoreState) => state.search);
  const dispatch = useDispatch();

  const changeSearchName = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch(updateSearchName(event.target.value));
  };

  const getPopularMoviesList = useCallback(async () => {
    setMovieList(null);
    const response: MovieList = await tmdbServices.movie.getPopularMovies();
    setMovieList(response);
  }, [setMovieList]);

  const getSearchMoviesList = useCallback(async () => {
    setMovieList(null);
    const response: MovieList = await tmdbServices.search.getMovieSearch(name);
    setMovieList(response);
  }, [name, setMovieList]);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getSearchMoviesList();
  };

  useEffect(() => {
    getPopularMoviesList();
  }, [getPopularMoviesList]);

  return (
    <div className="home">
      <form className="home__top" onSubmit={handleSearch}>
        <SearchInput
          placeholder="Search movie name"
          name="search"
          value={name}
          setter={changeSearchName}
        />
      </form>

      <div className="home__bottom">
        {movieList ? (
          <ul className="home__bottom__movie-list">
            {movieList?.results.map(movie => (
              <li key={movie.id}>
                <MovieCard {...movie} />
              </li>
            ))}
          </ul>
        ) : (
          <SpinnerLoading />
        )}
      </div>
    </div>
  );
}

export default Home;
