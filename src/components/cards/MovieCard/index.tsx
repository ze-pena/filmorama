import { memo } from 'react';
import classNames from 'classnames';

import { toggleFavorite } from '@store/reducers/favorites';
import { useDispatch, useSelector } from 'react-redux';

import { Movie } from '@interfaces/Movie';
import { StoreState } from '@interfaces/Redux';

import './styles.scss';

function MovieCard(props: Movie) {
  const dispatch = useDispatch();

  const isFavorite = useSelector((state: StoreState) =>
    state.favorites.some(favorite => favorite.id === props.id)
  );

  const clickFavorite = (): void => {
    dispatch(toggleFavorite(props));
  };

  return (
    <div className="movie-card">
      <img
        src={
          props.poster_path
            ? `https://image.tmdb.org/t/p/w500${props.poster_path}`
            : '/images/movie-card_not-found.jpg'
        }
        alt="Movie poster"
      />

      <div
        className={classNames('movie-card__top', { '--favorite': isFavorite })}>
        <button
          type="button"
          className="movie-card__top__favorite"
          onClick={clickFavorite}>
          <i
            className={`${isFavorite ? 'fa-solid' : 'fa-regular'} fa-heart`}></i>
        </button>
      </div>

      <div className="movie-card__bottom">
        <span className="movie-card__bottom__name">{props.title}</span>
        <span className="movie-card__bottom__year">
          {props.release_date
            ? new Date(props.release_date).getFullYear()
            : 'Unknown'}
        </span>
      </div>
    </div>
  );
}

export default memo(MovieCard);
