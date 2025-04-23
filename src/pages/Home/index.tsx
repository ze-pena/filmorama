import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { updateSearchName } from '@store/reducers/search';
import { getMovieDiscover, getMovieSearch } from '@store/reducers/movies';

import SearchInput from '@components/inputs/SearchInput';
import MovieCard from '@components/cards/MovieCard';
import SpinnerLoading from '@components/loaders/SpinnerLoading';

import { FormSubmit, InputChange } from '@interfaces/Forms';
import { StoreDispatch, StoreState } from '@interfaces/Redux';

import './styles.scss';

function Home() {
  const dispatch = useDispatch();
  const storeDispatch = useDispatch<StoreDispatch>();
  const { name } = useSelector((state: StoreState) => state.search);
  const { results, isLoading } = useSelector(
    (state: StoreState) => state.movies
  );

  const changeSearchName = (event: InputChange): void => {
    dispatch(updateSearchName(event.target.value));
  };

  const handleSearch = (event: FormSubmit): void => {
    event.preventDefault();
    storeDispatch(getMovieSearch({ query: name }));
  };

  useEffect(() => {
    storeDispatch(getMovieDiscover({ sort: ['popularity.desc'] }));
  }, [storeDispatch]);

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
        {isLoading ? (
          <SpinnerLoading />
        ) : (
          <ul className="home__bottom__movie-list">
            {results.map(movie => (
              <li key={movie.id}>
                <MovieCard {...movie} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Home;
