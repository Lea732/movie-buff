
import PropTypes from "prop-types";
import CheckBoxFavorite from "./CheckBoxFavorite";
import "../styles/FilmSerieCard.css";

function FilmSerieCard({ infos, onFavoriteChange }) {
  return (
    <div className="film_serie_card">
      <h2>{infos.name}</h2>
      <img className="film_serie_image" src={infos.img} alt={infos.name} />
      <p>{infos.desc}</p>
      <CheckBoxFavorite id={infos.id} onFavoriteChange={onFavoriteChange} />
    </div>
  );
}

FilmSerieCard.propTypes = {
  infos: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    favorite: PropTypes.bool.isRequired,
  }),
  onFavoriteChange: PropTypes.func.isRequired,
};

export default FilmSerieCard;

