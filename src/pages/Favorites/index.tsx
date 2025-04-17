import { useState } from 'react';

import MovieCard from '@components/cards/MovieCard';

import { MovieList } from './types';
import './styles.scss';

function Favorites() {
  const [movieList] = useState<MovieList | null>(null);

  return (
    <div className="favorites">
      <div className="favorites__top">
        <div className="favorites__top__search">
          <input
            placeholder="Search movie name"
            type="search"
            name="search"
            id="search"
          />

          <button type="button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>

      <div className="favorites__bottom">
        {movieList && (
          <ul className="favorites__bottom__movie-list">
            {movieList?.results.map(movie => (
              <li key={movie.id}>
                <MovieCard {...movie} />
              </li>
            ))}
          </ul>
        )}

        {!movieList && (
          <div className="favorites__bottom__notfound">
            <h4>Sem favoritos</h4>
            <p>Você não adicionou nenhum favorito ainda.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
