import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { StoreDispatch, StoreState } from '@interfaces/Redux';
import { getMovieGenre, getMovieDiscover } from '@store/reducers/movies';

import GenreCard from '@components/cards/GenreCard';
import MovieCard from '@components/cards/MovieCard';
import SpinnerLoading from '@components/loaders/SpinnerLoading';

import './styles.scss';

function Categories() {
  const storeDispatch = useDispatch<StoreDispatch>();
  const params = useParams();
  const { genres, results, isLoading } = useSelector(
    (state: StoreState) => state.movies
  );

  useEffect(() => {
    if (params.id) {
      storeDispatch(
        getMovieDiscover({
          genre: parseInt(params.id),
          sort: ['popularity.desc'],
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
        )}
      </div>
    </div>
  );
}

export default Categories;
