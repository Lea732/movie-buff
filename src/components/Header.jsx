import Logo from "./Logo";
import "../styles/Header.css";
import SelectorFilmSerie from "./SelectorFilmSerie";

function Header({favorite, setFavorite}) {
  return (
    <header>
      <Logo />
      <h1>Movie-buff</h1> 
      <SelectorFilmSerie favorite={favorite} setFavorite={setFavorite} />
    </header>
  );
}

export default Header;