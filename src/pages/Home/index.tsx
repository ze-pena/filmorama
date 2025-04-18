import { useEffect, useState } from 'react';

import movieServices from '@services/TMDB/Discover/movie';

import MovieCard from '@components/cards/MovieCard';

import { MovieList } from './types';
import './styles.scss';

function Home() {
  const [movieList, setMovieList] = useState<MovieList | null>(null);

  useEffect(() => {
    const getMovies = async () => {
      const response: MovieList = await movieServices.getMovie();
      setMovieList(response);
    };

    getMovies();
  }, [setMovieList]);

  return (
    <div className="home">
      <div className="home__top">
        <div className="home__top__search">
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

      <div className="home__bottom">
        <ul className="home__bottom__movie-list">
          {movieList?.results &&
            movieList.results.map(movie => (
              <li key={movie.id}>
                <MovieCard {...movie} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
