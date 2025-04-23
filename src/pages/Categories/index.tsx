import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import tmdbServices from '@services/TMDB';

import GenreCard from '@components/cards/GenreCard';
import MovieCard from '@components/cards/MovieCard';
import SpinnerLoading from '@components/loaders/SpinnerLoading';

import { GenreList } from '@interfaces/Genre';
import { MovieList } from '@interfaces/Movie';

import './styles.scss';

function Categories() {
  const params = useParams();
  const [genreList, setGenreList] = useState<GenreList | null>(null);
  const [movieList, setMovieList] = useState<MovieList | null>(null);

  const getMoviesGenreList = useCallback(async () => {
    setMovieList(null);
    const response: GenreList = await tmdbServices.genre.getMovieGenre();
    setGenreList(response);
  }, [setMovieList, setGenreList]);

  const getCategoryMoviesList = useCallback(
    async (id: string) => {
      setGenreList(null);
      const response: MovieList = await tmdbServices.discover.getMovieDiscover(
        parseInt(id)
      );
      setMovieList(response);
    },
    [setGenreList, setMovieList]
  );

  useEffect(() => {
    if (params.id) {
      getCategoryMoviesList(params.id);
    } else {
      getMoviesGenreList();
    }
  }, [getMoviesGenreList, getCategoryMoviesList, params]);

  return (
    <div className="categories">
      <div className="categories__bottom">
        {genreList || movieList ? (
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
        ) : (
          <SpinnerLoading />
        )}
      </div>
    </div>
  );
}

export default Categories;
