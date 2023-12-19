import PropTypes from "prop-types";

function SelectorFilmSerie({ favorite, setFavorite }) {
  const handleChange = (event) => {
    setFavorite({ favorite: event.target.value });
  };

  return (
    <div>
      <select onChange={handleChange} value={favorite}>
        <option value="All">All</option>
        <option value="Film">Film</option>
        <option value="Serie">Serie</option>
        <option value="True">Favorite</option>
      </select>
    </div>
  );
}

export default SelectorFilmSerie;

SelectorFilmSerie.propTypes = {
    favorite: PropTypes.bool.isRequired,
    setFavorite: PropTypes.func.isRequired,
  };
 