import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { StoreDispatch, StoreState } from '@interfaces/Redux';
import { getMovieGenre, getMovieDiscover } from '@store/reducers/movies';
import { ButtonClick } from '@interfaces/Forms';

import GenreCard from '@components/cards/GenreCard';
import MovieCard from '@components/cards/MovieCard';
import SpinnerLoading from '@components/loaders/SpinnerLoading';
import NumberPagination from '@components/pagination/NumberPagination';

import './styles.scss';

function Categories() {
  const storeDispatch = useDispatch<StoreDispatch>();
  const params = useParams();
  const { genres, results, isLoading, page, totalPages } = useSelector(
    (state: StoreState) => state.movies
  );

  const changePagination = (event: ButtonClick): void => {
    const targetValue = (event.target as HTMLButtonElement).value;

    storeDispatch(
      getMovieDiscover({
        sort: ['popularity.desc'],
        page: parseInt(targetValue),
        genre: parseInt(params.id!),
      })
    );
  };

  useEffect(() => {
    if (params.id) {
      storeDispatch(
        getMovieDiscover({
          sort: ['popularity.desc'],
          genre: parseInt(params.id),
        })
      );
    } else {
      storeDispatch(getMovieGenre());
    }
  }, [storeDispatch, params]);

  return (
    <div className="categories">
      <div className="categories__bottom">
        {isLoading ? (
          <SpinnerLoading />
        ) : (
          <>
            <ul className="categories__bottom__movie-list">
              {params.id
                ? results.map(movie => (
                    <li key={movie.id}>
                      <MovieCard {...movie} />
                    </li>
                  ))
                : genres.map(genre => (
                    <li key={genre.id}>
                      <GenreCard {...genre} />
                    </li>
                  ))}
            </ul>

            {params.id && (
              <NumberPagination
                currentPage={page}
                totalPages={totalPages}
                clickPagination={changePagination}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Categories;
