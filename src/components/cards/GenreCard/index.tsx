import { useNavigate } from 'react-router-dom';
import { Genre } from './types';
import './styles.scss';

function GenreCard(props: Genre) {
  const navigate = useNavigate();
  const clickGenre = () => {
    navigate(`/categories/${props.id}`);
  };

  return (
    <div className="genre-card">
      <button type="button" className="genre-card__button" onClick={clickGenre}>
        <span className="genre-card__button__name">{props.name}</span>
      </button>
    </div>
  );
}

export default GenreCard;
