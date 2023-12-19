import PropTypes from 'prop-types';

function Card({ infos, setFilters }) {
  const handleCheckboxChange = () => {
    setFilters({ favorite: !infos.favorite ? 'True' : 'All' });
  };

  return (
    <div className="film_serie_card">
      <h2>{infos.name}</h2>
      <img className="film_serie_image" src={infos.img} alt={infos.name} />
      <p>{infos.desc}</p>
      <div>
        <label htmlFor="favoriteCheckbox">Add to Favorites</label>
        <input
          id="favoriteCheckbox"
          type="checkbox"
          checked={infos.favorite}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  infos: PropTypes.object,
  setFilters: PropTypes.func,
};