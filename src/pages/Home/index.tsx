import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { updateSearchName } from '@store/reducers/search';
import { getMovieDiscover, getMovieSearch } from '@store/reducers/movies';

import SearchInput from '@components/inputs/SearchInput';
import MovieCard from '@components/cards/MovieCard';
import SpinnerLoading from '@components/loaders/SpinnerLoading';
import NumberPagination from '@components/pagination/NumberPagination';

import { FormSubmit, InputChange, ButtonClick } from '@interfaces/Forms';
import { StoreDispatch, StoreState } from '@interfaces/Redux';

import './styles.scss';

function Home() {
  const dispatch = useDispatch();
  const storeDispatch = useDispatch<StoreDispatch>();
  const { name } = useSelector((state: StoreState) => state.search);
  const { results, isLoading, page, totalPages } = useSelector(
    (state: StoreState) => state.movies
  );

  const changePagination = (event: ButtonClick): void => {
    const targetValue = (event.target as HTMLButtonElement).value;

    if (name) {
      storeDispatch(
        getMovieSearch({ query: name, page: parseInt(targetValue) })
      );
    } else {
      storeDispatch(
        getMovieDiscover({
          sort: ['popularity.desc'],
          page: parseInt(targetValue),
        })
      );
    }
  };

  const changeSearchName = (event: InputChange): void => {
    const targetValue = (event.target as HTMLInputElement).value;
    dispatch(updateSearchName(targetValue));
  };

  const handleSearch = (event: FormSubmit): void => {
    event.preventDefault();
    if (name) {
      storeDispatch(getMovieSearch({ query: name }));
    } else {
      storeDispatch(getMovieDiscover({ sort: ['popularity.desc'] }));
    }
  };

  useEffect(() => {
    dispatch(updateSearchName(''));
    storeDispatch(getMovieDiscover({ sort: ['popularity.desc'] }));
  }, [dispatch, storeDispatch]);

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
          <>
            <ul className="home__bottom__movie-list">
              {results.map(movie => (
                <li key={movie.id}>
                  <MovieCard {...movie} />
                </li>
              ))}
            </ul>

            <NumberPagination
              currentPage={page}
              totalPages={totalPages}
              clickPagination={changePagination}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
