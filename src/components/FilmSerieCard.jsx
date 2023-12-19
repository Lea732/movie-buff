import PropTypes from "prop-types"

import "../styles/FilmSerieCard.css"
import CheckBoxFavorite from "./CheckBoxFavorite";

function Card({infos}) {

  return (
    <div className="film_serie_card">
        <h2>{infos.name}</h2>
        <img className="film_serie_image" src={infos.img}/>
        <p>{infos.details}</p>
        <p>{infos.desc}</p>
        <p>{infos.opinion}</p>
        <CheckBoxFavorite infos={infos}/>
    </div>
  )
}

export default Card

Card.propTypes = {
    infos: PropTypes.object,
}