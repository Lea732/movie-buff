import { useState } from "react";
import PropTypes from "prop-types"

function CheckBoxFavorite({infos}) {

    const [favorite, setFavorite] = useState(infos.favorite);

    const handleCheckboxChange = () => {
        setFavorite((prevFavorite) => !prevFavorite);
      };

  return (
    <div>
        <label htmlFor="favoriteCheckbox">Add to Favorites</label>
        <input
          id="favoriteCheckbox"
          type="checkbox"
          checked={favorite}
          onChange={handleCheckboxChange}
        />
      </div>
  )
}

export default CheckBoxFavorite

CheckBoxFavorite.propTypes = {
    infos: PropTypes.object,
}