import PropTypes from "prop-types";
import CheckBoxFavorite from "./CheckBoxFavorite";
import "../styles/FilmSerieCard.css";

function FilmSerieCard({ infos, onFavoriteChange }) {
  return (
    <div className="film_serie_card">
        <h2>{infos.name}</h2>
        <img className="film_serie_image" src={infos.img} alt={infos.name}/>
        <div className="infos">
          <p><span className="details">Year of release:</span>{infos.details}</p>
          <p><span className="details">Synopsis:</span>{infos.desc}</p>
          <p><span className="details">Personal opinion:</span>{infos.opinion}</p>
          <CheckBoxFavorite id={infos.id} onFavoriteChange={onFavoriteChange}/>
        </div>
    </div>
  );
}

FilmSerieCard.propTypes = {
  infos: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    opinion: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    favorite: PropTypes.bool.isRequired,
  }),
  onFavoriteChange: PropTypes.func.isRequired,
};

export default FilmSerieCard;

