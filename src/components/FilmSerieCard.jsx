import PropTypes from "prop-types"

import "../styles/FilmSerieCard.css"
import CheckBoxFavorite from "./CheckBoxFavorite";

function FilmSerieCard({infos}) {

  return (
    <div className="film_serie_card">
        <h2>{infos.name}</h2>
        <img className="film_serie_image" src={infos.img}/>
        <p>{infos.desc}</p>
        <CheckBoxFavorite infos={infos}/>
    </div>
  )
}

export default FilmSerieCard

FilmSerieCard.propTypes = {
    infos: PropTypes.object,
}