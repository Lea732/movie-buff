import Logo from "./Logo";
import "../styles/Header.css"
import SelectorFilmSerie from "./SelectorFilmSerie";

function Header() {
    return <header>
        <Logo/>
        <h1>Movie-buff</h1> 
        <SelectorFilmSerie/>
    </header>
}

export default Header;