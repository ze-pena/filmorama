import { useState } from 'react';
import classNames from 'classnames';
import { Movie } from './types';
import './styles.scss';

function MovieCard(props: Movie) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const clickFavorite = (): void => setIsFavorite(state => !state);

  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
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
          {new Date(props.release_date).getFullYear()}
        </span>
      </div>
    </div>
  );
}

export default MovieCard;
