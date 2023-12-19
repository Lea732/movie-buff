import Logo from "./Logo";
import "../styles/Header.css";
import SelectorFilmSerie from "./SelectorFilmSerie";
import PropTypes from "prop-types";

function Header({favorite, setFavorite}) {
  return (
    <header>
      <Logo />
      <h1>Movie-buff</h1> 
      <SelectorFilmSerie favorite={favorite.favorite} setFavorite={setFavorite} />
    </header>
  );
}

export default Header;

Header.propTypes = {
  favorite: PropTypes.bool.isRequired,
  setFavorite: PropTypes.func.isRequired,
};