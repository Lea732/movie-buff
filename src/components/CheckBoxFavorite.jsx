import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function CheckBoxFavorite({ id, onFavoriteChange }) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    onFavoriteChange(id, favorite);
  }, [id, favorite, onFavoriteChange]);

  const handleCheckboxChange = () => {
    setFavorite((prevFavorite) => !prevFavorite);
  };

  return (
    <div>
      <label htmlFor={`favoriteCheckbox-${id}`}>Add to Favorites</label>
      <input
        id={`favoriteCheckbox-${id}`}
        type="checkbox"
        checked={favorite}
        onChange={handleCheckboxChange}
      />
    </div>
  );
}

CheckBoxFavorite.propTypes = {
  id: PropTypes.number.isRequired,
  onFavoriteChange: PropTypes.func.isRequired,
};

export default CheckBoxFavorite;


