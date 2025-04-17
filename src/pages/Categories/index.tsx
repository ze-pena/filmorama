import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import tmdbServices from '@services/TMDB';

import GenreCard from '@components/cards/GenreCard';
import MovieCard from '@components/cards/MovieCard';

import { GenreList } from '@interfaces/Genre';
import { MovieList } from '@interfaces/Movie';

import './styles.scss';

function Categories() {
  const params = useParams();
  const [genreList, setGenreList] = useState<GenreList | null>(null);
  const [movieList, setMovieList] = useState<MovieList | null>(null);

  useEffect(() => {
    const getGenreList = async () => {
      const response: GenreList = await tmdbServices.genre.getMovieGenre();
      setGenreList(response);
    };

    const getMovieList = async (id: string) => {
      const response: MovieList = await tmdbServices.discover.getMovieDiscover(
        parseInt(id)
      );
      setMovieList(response);
    };

    if (params.id) {
      getMovieList(params.id);
      setGenreList(null);
    } else {
      getGenreList();
      setMovieList(null);
    }
  }, [setGenreList, setMovieList, params]);

  return (
    <div className="categories">
      <div className="categories__top">
        <div className="categories__top__search">
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

      <div className="categories__bottom">
        <ul className="categories__bottom__movie-list">
          {genreList?.genres.map(genre => (
            <li key={genre.id}>
              <GenreCard {...genre} />
            </li>
          ))}

          {movieList?.results.map(movie => (
            <li key={movie.id}>
              <MovieCard {...movie} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Categories;
