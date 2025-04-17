import { useSelector } from 'react-redux';

import MovieCard from '@components/cards/MovieCard';

import { StoreState } from '@interfaces/Redux';

import './styles.scss';

function Favorites() {
  const moviesList = useSelector((state: StoreState) => state.favorites);

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
        {moviesList.length > 0 && (
          <ul className="favorites__bottom__movie-list">
            {moviesList.map(movie => (
              <li key={movie.id}>
                <MovieCard {...movie} />
              </li>
            ))}
          </ul>
        )}

        {moviesList.length === 0 && (
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
